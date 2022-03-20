<template>
  <div class="container py-5">
    <admin-nav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategory"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            @keyup.enter="createCategory"
          />
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary" @click.prevent.stop="createCategory" :disabled="isProcessing">
            {{ isProcessing ? '處理中...' : '新增' }}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
             {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
              @keyup.enter="updateCategory({ categoryId: category.id, name: category.name })"
            >
            <span v-show="category.isEditing" class="cancel" @click="handleCancel(category.id)">✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button type="button" class="btn btn-link mr-2" v-show="!category.isEditing"
                    @click.prevent.stop="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button type="button" class="btn btn-link mr-2" v-show="category.isEditing"
                    @click.prevent.stop="updateCategory({ categoryId: category.id, name: category.name })"
            >
              Save
            </button>
            <button type="button" class="btn btn-link mr-2" @click.prevent.stop="deleteCategory(category.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'admin-categories',
  components: {
    'admin-nav': AdminNav
  },
  data() {
    return {
      newCategory: '',
      categories: [],
      isProcessing: false
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()

        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false,
          nameCached: ''
        }))
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
        console.log(err)
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true
        const newCategory = this.newCategory.trim()

        if (!newCategory) {
          Toast.fire({
            icon: 'warning',
            title: '請填寫類別名稱'
          })
          return
        }

        const { data } = await adminAPI.categories.create({ name: newCategory })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.categories.push({
          id: data.categoryId,
          name: newCategory
        })
        this.isProcessing = false
        this.newCategory = ''
      } catch (err) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
        console.log(err)
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete({ categoryId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.categories = this.categories.filter(category => category.id !== categoryId)
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
        console.log(err)
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }
        return category
      })
    },
    async updateCategory({ categoryId, name }) {
      try {
        name = name.trim()
        if (!name) {
          return this.handleCancel(categoryId)
        }

        const { data } = await adminAPI.categories.update({ categoryId, name })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        
        this.toggleIsEditing(categoryId)
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '無法修改餐廳類別，請稍後再試'
        })
        console.log(err)
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached
          }
        }
        return category
      })

      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>