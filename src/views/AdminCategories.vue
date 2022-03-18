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
          <button type="button" class="btn btn-primary" @click.prevent.stop="createCategory">新增</button>
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
import { v4 as uuidv4 } from 'uuid'
import AdminNav from '@/components/AdminNav'

const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

export default {
  name: 'admin-categories',
  components: {
    'admin-nav': AdminNav
  },
  data() {
    return {
      newCategory: '',
      categories: []
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    fetchCategories () {
      this.categories = dummyData.categories.map(category => ({
        ...category,
        isEditing: false,
        nameCached: ''
      }))
    },
    createCategory() {
      const newCategory = this.newCategory.trim()

      if (newCategory) { 
        this.categories.push({
          id: uuidv4(),
          name: newCategory,
        })
        this.newCategory = ''
      }
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(category => category.id !== categoryId)
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
    updateCategory({ categoryId, name }) {
      const temp = name.trim()

      if (temp) {
        return this.toggleIsEditing(categoryId)
      }
      return this.handleCancel(categoryId)
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