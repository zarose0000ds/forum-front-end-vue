<template>
  <div class="container py-5">
    <nav-tabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
      <restaurant-card v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import Navtabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Bernard Smitham",
      tel: "251-335-3711 x04729",
      address: "026 Hermiston Course",
      opening_hours: "08:00",
      description: "Est qui praesentium nobis. Libero iste alias ut ex",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.99271535348719",
      viewCounts: 1,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-14T16:07:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Shanelle Kuvalis",
      tel: "(560) 912-9053 x362",
      address: "907 Genesis Walk",
      opening_hours: "08:00",
      description: "Ea nobis blanditiis error exercitationem debitis e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.640300894685444",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Mireille Larson",
      tel: "520.260.1372 x83105",
      address: "895 Maiya Run",
      opening_hours: "08:00",
      description: "sapiente",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.90416321969921",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Edward Kub",
      tel: "112-846-4513 x199",
      address: "1542 Jimmy Fords",
      opening_hours: "08:00",
      description: "Pariatur quisquam omnis nam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.96985155705076",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Bryana Hoeger",
      tel: "(936) 988-3962 x974",
      address: "581 Conn Neck",
      opening_hours: "08:00",
      description: "Sint suscipit et reiciendis et qui dolores. Recusa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.58519329836781",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Alyson Mayert IV",
      tel: "(517) 493-4656 x09810",
      address: "63929 Loma Forest",
      opening_hours: "08:00",
      description: "Sed ut deserunt corporis unde exercitationem sunt ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.965985356960374",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Torrance VonRueden",
      tel: "(402) 080-3233 x8925",
      address: "6401 Price Track",
      opening_hours: "08:00",
      description: "Praesentium deserunt occaecati dignissimos eaque a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.60537378220562",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Jayson Champlin",
      tel: "(246) 834-1095 x5988",
      address: "806 Christiansen Manor",
      opening_hours: "08:00",
      description: "Cum qui nulla sed ullam beatae.\nMolestiae qui accu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.56443449421344",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Susan Torphy",
      tel: "992-309-4244 x79187",
      address: "0782 Dickinson Trafficway",
      opening_hours: "08:00",
      description: "Mollitia officiis mollitia hic sunt eius. Ducimus ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.54837617699852",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Savion Hackett",
      tel: "844.022.7823 x76486",
      address: "1658 Kris Crossing",
      opening_hours: "08:00",
      description: "Asperiores qui et est ad iusto suscipit amet et cu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.0749086108585733",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
    },
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: "",
};

export default {
  name: "restaurants-home",
  components: {
    "nav-tabs": Navtabs,
    "restaurant-card": RestaurantCard,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData

      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
};
</script>