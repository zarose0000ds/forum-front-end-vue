<template>
  <div class="container py-5">
    <nav-tabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <restaurant-card v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import Navtabs from '../components/NavTabs.vue'
import RestaurantsTopCard from '../components/RestaurantsTopCard.vue'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Leopoldo Boehm",
      tel: "215-403-4269",
      address: "756 Madisyn Ridges",
      opening_hours: "08:00",
      description: "Aut iusto animi incidunt praesentium.\nEum sed quis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.32711546078505",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Maximus Pagac",
      tel: "(179) 084-1401",
      address: "075 Watsica Walks",
      opening_hours: "08:00",
      description: "ducimus libero dolor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.47592388133269",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Althea Hirthe",
      tel: "(709) 660-7812 x26060",
      address: "29862 Chaya Ways",
      opening_hours: "08:00",
      description: "Mollitia possimus a reprehenderit. Atque tempore i",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.81234464272808",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Aron Murray",
      tel: "960-115-4842",
      address: "6256 Kuphal Spring",
      opening_hours: "08:00",
      description: "Et minima eligendi sint ipsa ratione repellat ea s",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.70045072274594",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Georgianna Nader",
      tel: "1-455-272-0257 x7765",
      address: "655 Hauck Tunnel",
      opening_hours: "08:00",
      description: "Eius beatae molestiae magni est sed tenetur. Fugia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.019662995789442",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Jordyn Will V",
      tel: "1-949-328-5195",
      address: "5555 Estevan Green",
      opening_hours: "08:00",
      description: "Sed eos commodi maiores. Quaerat enim iusto dignis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.33626258160967",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Jamey Macejkovic",
      tel: "(341) 152-6925 x0316",
      address: "360 Reilly Glens",
      opening_hours: "08:00",
      description: "rem voluptatum ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.28413057263657",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Dena Goodwin",
      tel: "545-765-4645 x3234",
      address: "3409 Beier Hollow",
      opening_hours: "08:00",
      description: "Eos eveniet eos minima. Qui praesentium culpa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.1841620295521",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Efrain Goldner",
      tel: "133.558.3237 x4812",
      address: "9958 Braun Ports",
      opening_hours: "08:00",
      description: "Laboriosam eveniet quia ut corrupti possimus tenet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.91946379424965",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Newton Cormier",
      tel: "(507) 702-1147",
      address: "5666 Bednar River",
      opening_hours: "08:00",
      description: "voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.99126241156671",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    }
  ]
}

export default {
  name: 'restaurants-home',
  components: {
    'nav-tabs': Navtabs,
    'restaurant-card': RestaurantsTopCard
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      const { restaurants } = dummyData
      this.restaurants = restaurants
    }
  }
}
</script>