<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{name: 'admin-restaurant', params: { id: restaurant.id } }" class="btn btn-link">
            Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button type="button" class="btn btn-link" @click.prevent.stop="deleteRestaurant(restaurant.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Bernard Smitham",
      tel: "251-335-3711 x04729",
      address: "026 Hermiston Course",
      opening_hours: "08:00",
      description:
        "Est qui praesentium nobis. Libero iste alias ut ex. Adipisci voluptate sunt exercitationem. Consequatur ratione omnis qui animi aut nesciunt enim quia et. Laudantium quo incidunt repellendus quis laboriosam voluptatem.\n \rAut enim voluptate aut aut dolorum debitis corporis et. Sit ea qui. Architecto magnam quibusdam quia voluptas recusandae labore. Provident ut sit eum sunt consectetur illum.\n \rEa placeat aliquid. Omnis magnam est possimus. Dignissimos quis omnis eius pariatur qui quas est odio. Sunt eius perspiciatis excepturi cum ullam nihil eligendi. Unde molestiae dolor cupiditate qui. Quis eveniet qui.",
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
    },
    {
      id: 2,
      name: "Shanelle Kuvalis",
      tel: "(560) 912-9053 x362",
      address: "907 Genesis Walk",
      opening_hours: "08:00",
      description: "Ea nobis blanditiis error exercitationem debitis enim.",
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
    },
    {
      id: 5,
      name: "Bryana Hoeger",
      tel: "(936) 988-3962 x974",
      address: "581 Conn Neck",
      opening_hours: "08:00",
      description:
        "Sint suscipit et reiciendis et qui dolores. Recusandae et cupiditate ratione voluptate voluptates magnam dolorum tempora. Dolor voluptas aut dolore quia et. Et ullam aut aut.\n \rHarum eum natus. Et voluptatem modi earum corporis est dolorem quibusdam. Accusantium optio accusamus provident. Ipsum et ut quas quis et architecto doloribus vitae ullam. Laboriosam omnis sunt velit a molestiae aut consequuntur error totam. Et ipsum sed necessitatibus quo qui.\n \rIn quis libero nostrum deserunt expedita commodi illo sapiente. Et non maiores nobis perspiciatis omnis. Omnis ea ea aut eum ut sunt dolores. Qui dolor laborum molestias necessitatibus.",
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
    },
    {
      id: 6,
      name: "Alyson Mayert IV",
      tel: "(517) 493-4656 x09810",
      address: "63929 Loma Forest",
      opening_hours: "08:00",
      description:
        "Sed ut deserunt corporis unde exercitationem sunt error recusandae blanditiis.\nCommodi repudiandae voluptatem.\nIn quisquam dolore sed atque incidunt voluptas quia earum.\nPorro suscipit ut deleniti tempora.",
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
    },
    {
      id: 7,
      name: "Torrance VonRueden",
      tel: "(402) 080-3233 x8925",
      address: "6401 Price Track",
      opening_hours: "08:00",
      description:
        "Praesentium deserunt occaecati dignissimos eaque ab. Quae tempora facilis. Ullam ex placeat alias et molestiae quae a culpa quibusdam. Repudiandae sequi commodi in corrupti. Distinctio perspiciatis quaerat provident nesciunt ut.\n \rImpedit labore quaerat aut et eos rerum quae earum perspiciatis. Nostrum quidem eum est beatae inventore optio ad repellat. Quia reiciendis hic dignissimos sunt pariatur sed quo reprehenderit dolores. Ea eos est nobis reiciendis cum sed molestiae. Eos quia quibusdam ipsam. Ex dolores ipsam neque aspernatur tempora rerum non deleniti.\n \rSed aspernatur saepe adipisci. Eius est animi quidem. Deserunt deserunt natus dolorem quis tempora.",
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
    },
    {
      id: 8,
      name: "Jayson Champlin",
      tel: "(246) 834-1095 x5988",
      address: "806 Christiansen Manor",
      opening_hours: "08:00",
      description:
        "Cum qui nulla sed ullam beatae.\nMolestiae qui accusamus officiis.\nTempore assumenda itaque.",
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
    },
    {
      id: 9,
      name: "Susan Torphy",
      tel: "992-309-4244 x79187",
      address: "0782 Dickinson Trafficway",
      opening_hours: "08:00",
      description:
        "Mollitia officiis mollitia hic sunt eius. Ducimus tenetur adipisci quo qui facilis et sit. Consequuntur excepturi soluta qui enim voluptatibus.",
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
    },
    {
      id: 10,
      name: "Savion Hackett",
      tel: "844.022.7823 x76486",
      address: "1658 Kris Crossing",
      opening_hours: "08:00",
      description:
        "Asperiores qui et est ad iusto suscipit amet et culpa. Vitae est quo rerum enim praesentium. Quisquam sapiente ea dolores.",
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
    },
    {
      id: 11,
      name: "Rubie Kuphal",
      tel: "1-336-328-3016",
      address: "0651 Heaney Ports",
      opening_hours: "08:00",
      description:
        "Totam sit et voluptatem ipsum perspiciatis corporis. Voluptatum unde voluptatibus laudantium amet. Debitis iste expedita accusamus voluptas reiciendis sequi quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.19849381011063",
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
    },
    {
      id: 12,
      name: "Josue Hagenes",
      tel: "169.639.6636 x903",
      address: "59618 Phoebe Points",
      opening_hours: "08:00",
      description: "quasi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.29713876042938",
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
    },
    {
      id: 13,
      name: "Jean Ruecker",
      tel: "(609) 021-4271 x520",
      address: "19260 May Terrace",
      opening_hours: "08:00",
      description:
        "Sequi alias placeat quisquam asperiores et. Fuga consequuntur alias corrupti aut fugit. Quae et omnis porro earum qui. Consequatur libero quaerat non quibusdam dolor.\n \rId officiis voluptas dolores enim. Aut et hic voluptatem vero. Voluptas accusamus dicta blanditiis aut nostrum in beatae. Ab nulla voluptas.\n \rFugiat molestiae voluptas ipsum voluptatem. Earum atque maxime. Dignissimos officia sed itaque ea autem tempore magnam ipsum. Dolorem commodi omnis dolores labore et adipisci eos eveniet. Doloremque esse eum. Vero aut delectus vel nemo voluptatem nihil aliquid.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.5622777235755",
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
    },
    {
      id: 14,
      name: "Kane Cole DDS",
      tel: "1-272-484-1108",
      address: "0974 Green Island",
      opening_hours: "08:00",
      description:
        "Repellendus ratione sequi unde sequi. Tempora quam qui odit adipisci nihil soluta ut commodi. Fugit hic in sapiente.\n \rEaque voluptates quaerat non illum consequatur. Repellendus iusto doloribus. Neque officiis voluptatem. Dolorem vel ut delectus reiciendis. Repellendus porro dolore. Veniam ipsa ut odio non.\n \rHarum exercitationem porro quas voluptates nobis iure reiciendis labore. Aspernatur temporibus quaerat officiis molestiae et eum placeat. Nostrum ea necessitatibus aut molestiae autem atque at.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.07903950344547",
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
    },
    {
      id: 15,
      name: "Georgiana Thompson",
      tel: "(785) 678-4377",
      address: "848 Isaiah Roads",
      opening_hours: "08:00",
      description:
        "Id blanditiis doloribus eos molestiae ut in id. Nostrum fugiat sint ipsum excepturi assumenda rem et dolorem. Sunt occaecati nihil consequatur molestiae earum velit sed quibusdam voluptate. Est veritatis adipisci placeat ab quo aut nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.79365094194294",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 16,
      name: "Sonia Kris",
      tel: "(443) 972-7367 x23347",
      address: "8745 Hettie Extension",
      opening_hours: "08:00",
      description:
        "Voluptatem sed quisquam aliquid sapiente totam quia. Et quo rerum non ipsam voluptatem esse. Et totam incidunt voluptates vitae similique. Rerum quis quia veritatis tenetur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.002331706025036",
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
    },
    {
      id: 17,
      name: "Christian Nienow Sr.",
      tel: "(102) 063-7438",
      address: "2727 Monique Underpass",
      opening_hours: "08:00",
      description:
        "Ad asperiores doloribus quo doloremque qui fuga quod quia est. Et ex doloribus commodi dolores alias est. Reprehenderit velit voluptatem reiciendis eius cupiditate maiores aut natus quia. Rem velit quae earum et dolorum expedita eaque occaecati doloribus. Dolores qui sint. Neque reiciendis perferendis ut sunt placeat nam eaque.\n \rSint est fugiat laudantium culpa est. Nihil deleniti repudiandae tempore sapiente quo ducimus nemo. Reprehenderit consequatur labore quia maiores facilis. Molestiae molestiae quibusdam culpa quas quae qui. Voluptatem accusantium reiciendis reiciendis repellat.\n \rConsequatur qui deserunt nobis quis perspiciatis illum voluptate perspiciatis. Quia quia quasi deserunt voluptate vel voluptas sint. Iusto assumenda beatae voluptatum est rerum odio. Quam omnis nobis repellat et. Cupiditate temporibus cum labore ut eaque reprehenderit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.537737278419236",
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
    },
    {
      id: 18,
      name: "Lenore Will",
      tel: "(360) 346-2414 x1056",
      address: "627 Alyce Prairie",
      opening_hours: "08:00",
      description:
        "Nulla aut ipsa minima et ea adipisci asperiores sapiente sed. In ratione mollitia odio iure ex. Est quos aut quam amet ex mollitia quae. Consequatur inventore sint. Neque reprehenderit ipsa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.7502860189843",
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
    },
    {
      id: 19,
      name: "Barry Heller",
      tel: "520-514-4045 x30748",
      address: "299 Wyman Lake",
      opening_hours: "08:00",
      description: "Cumque corporis vero.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.06040851873771",
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
    },
    {
      id: 20,
      name: "Mozelle Emard",
      tel: "(095) 485-1264 x2110",
      address: "7534 Ullrich Track",
      opening_hours: "08:00",
      description:
        "Aut magnam eum laborum et.\nSint suscipit et consequatur corporis et deleniti dolor.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.71887766608934",
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
    },
    {
      id: 21,
      name: "Annamae Miller",
      tel: "1-171-988-7891 x4978",
      address: "096 Vita Street",
      opening_hours: "08:00",
      description: "Consequuntur necessitatibus ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.605917443779695",
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
    },
    {
      id: 22,
      name: "Ned Schaefer II",
      tel: "(046) 572-2222",
      address: "979 Delmer Causeway",
      opening_hours: "08:00",
      description: "voluptatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.415301555676537",
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
    },
    {
      id: 23,
      name: "Ms. Joesph Lindgren",
      tel: "532.909.8353",
      address: "2550 Effie Mountain",
      opening_hours: "08:00",
      description: "Quidem velit sed fuga incidunt ut molestias cupiditate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.366140888213529",
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
    },
    {
      id: 24,
      name: "Clement Veum",
      tel: "855.535.5722 x005",
      address: "972 Johns Mount",
      opening_hours: "08:00",
      description:
        "Aliquid laboriosam totam ut. Nulla quisquam rerum quo recusandae. Tempore repellendus qui aut. Earum sit nemo corporis distinctio id quo mollitia. Harum aut voluptas corporis dolorem aut.\n \rLibero sit culpa ex eos at labore veritatis est. Repellendus dolorem quia consectetur vitae. Eius ad omnis dolor quia officia eaque molestias id. Amet et est. Maiores assumenda quam.\n \rVitae magnam ut. Quis aut accusantium et non quis deleniti ea. Qui et quibusdam reprehenderit doloremque. Accusamus qui aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=57.3559922278243",
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
    },
    {
      id: 25,
      name: "Ms. Adam Reichel",
      tel: "291.785.7654 x12713",
      address: "1832 Bechtelar Mountains",
      opening_hours: "08:00",
      description: "molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.39488365707852",
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
    },
    {
      id: 26,
      name: "Nathanael Wolff",
      tel: "787-707-2824 x30439",
      address: "10933 Michele Ridge",
      opening_hours: "08:00",
      description:
        "Nisi molestias non. Natus voluptatum suscipit odit quisquam vero sed officiis harum quam. Tempora esse sit officia. Et tempore eos. Totam exercitationem veniam. Dolores eligendi voluptatem officia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.62901089268246",
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
    },
    {
      id: 27,
      name: "Brock Johnston",
      tel: "980.603.6222 x040",
      address: "219 Greg Place",
      opening_hours: "08:00",
      description: "Error dolorem perspiciatis odio soluta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.4295340573123445",
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
    },
    {
      id: 28,
      name: "Jazmin Torp",
      tel: "1-725-043-2427 x8640",
      address: "820 King Corner",
      opening_hours: "08:00",
      description:
        "Eos nisi atque recusandae. Iure nobis ab aut vel. Maiores libero non similique voluptas veritatis quaerat dolores sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.655716577926763",
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
    },
    {
      id: 29,
      name: "Veronica Lebsack",
      tel: "(384) 820-7511 x6142",
      address: "775 Katelynn Creek",
      opening_hours: "08:00",
      description: "Et sint laudantium doloremque qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.68047776533659",
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
    },
    {
      id: 30,
      name: "Ms. Jefferey Krajcik",
      tel: "1-351-900-0912",
      address: "813 Stehr Loaf",
      opening_hours: "08:00",
      description: "nisi magni magni",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.69543125192384",
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
    },
    {
      id: 31,
      name: "Jayden Goldner",
      tel: "(144) 889-1627 x13918",
      address: "16454 Pierce Lock",
      opening_hours: "08:00",
      description:
        "Totam delectus aut ad quos qui hic. Et omnis illo adipisci explicabo modi in. Qui veritatis pariatur aut voluptate doloribus pariatur alias. Omnis hic sit qui aut et voluptas dolorem et. Nostrum sapiente nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.78789720680735",
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
    },
    {
      id: 32,
      name: "Charlie Rolfson",
      tel: "349.727.5043 x809",
      address: "176 Leda Canyon",
      opening_hours: "08:00",
      description:
        "Voluptatem eos officia facere blanditiis et nostrum error enim. Modi corporis iste quod. Ut omnis aut magnam voluptatem et nesciunt et omnis est. Et enim voluptates.\n \rNemo asperiores et placeat illo asperiores. Rerum dicta eius nesciunt nisi fugit. Numquam amet id minus quis similique voluptatem dicta.\n \rQui corporis in et quia dicta modi debitis sit placeat. Nobis sint doloribus esse molestiae voluptatem ut quo sint. Officiis nostrum rem provident sit reiciendis minima. Enim officia ad occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.775721803495327",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 33,
      name: "Nils Ryan",
      tel: "253-655-8218 x5836",
      address: "7897 Zulauf Fields",
      opening_hours: "08:00",
      description:
        "Voluptatibus qui in numquam consequatur aliquid incidunt qui aut. Aperiam consequatur molestiae enim dolorum laudantium et ea. Impedit fugit illum. In dolorum aut possimus aut hic temporibus quo consequuntur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.16257687999887",
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
    },
    {
      id: 34,
      name: "Miss Alva Stiedemann",
      tel: "1-831-341-2722 x5109",
      address: "43287 Gregory Cape",
      opening_hours: "08:00",
      description:
        "Distinctio quibusdam accusamus. Debitis nihil enim voluptatum quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.3880325214775",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 35,
      name: "Rex Turcotte",
      tel: "(640) 373-8999",
      address: "3660 Powlowski Canyon",
      opening_hours: "08:00",
      description: "Ex sunt ab esse consequatur eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.31570139514412",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 36,
      name: "Hermina Schumm",
      tel: "242.342.8609 x0163",
      address: "8398 Schimmel Rue",
      opening_hours: "08:00",
      description: "Aperiam voluptatem assumenda et facere corrupti fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.20653013259135",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 37,
      name: "Myrl Flatley",
      tel: "1-792-622-9581",
      address: "06304 Deonte Trace",
      opening_hours: "08:00",
      description:
        "Quaerat accusantium aut dicta enim et dolor. Omnis neque tenetur. Quo ad qui sed aliquid atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.13042409165745",
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
    },
    {
      id: 38,
      name: "Mrs. Adolph Maggio",
      tel: "(622) 758-6824 x38671",
      address: "67098 Doyle Shoals",
      opening_hours: "08:00",
      description:
        "Voluptates dolorum rerum sapiente voluptate iusto laudantium veniam ducimus. Molestiae saepe accusantium maxime ratione cum voluptates sit molestiae molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.318511905864256",
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
    },
    {
      id: 39,
      name: "Sydney Ruecker",
      tel: "319.874.7078 x81550",
      address: "8184 Labadie Ferry",
      opening_hours: "08:00",
      description: "praesentium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.646969438527975",
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
    },
    {
      id: 40,
      name: "Ms. Wilma Harber",
      tel: "099.618.2651 x02827",
      address: "062 Shemar Ferry",
      opening_hours: "08:00",
      description:
        "Eum sapiente nostrum ex corporis et. Nesciunt unde corrupti vel quam exercitationem quibusdam ab. Cupiditate cumque dolorum esse ipsam laborum ipsam architecto mollitia quisquam. Fugiat hic sint atque repudiandae. Omnis et perspiciatis deserunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.00207041242112",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 42,
      name: "Efrain Goldner",
      tel: "133.558.3237 x4812",
      address: "9958 Braun Ports",
      opening_hours: "08:00",
      description:
        "Laboriosam eveniet quia ut corrupti possimus tenetur animi corporis.\nAlias suscipit neque tempore rerum ex animi a aut sunt.\nEt architecto nobis fuga necessitatibus architecto earum numquam dignissimos.\nMagni quaerat est rerum totam consequatur.\nSint modi enim dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.91946379424965",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 45,
      name: "Jordyn Will V",
      tel: "1-949-328-5195",
      address: "5555 Estevan Green",
      opening_hours: "08:00",
      description:
        "Sed eos commodi maiores. Quaerat enim iusto dignissimos qui aliquid perferendis nam mollitia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.33626258160967",
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
    },
    {
      id: 46,
      name: "Georgianna Nader",
      tel: "1-455-272-0257 x7765",
      address: "655 Hauck Tunnel",
      opening_hours: "08:00",
      description:
        "Eius beatae molestiae magni est sed tenetur. Fugiat et mollitia dolorem. Suscipit ut omnis eos quidem at autem expedita harum iste. Est saepe et id amet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.019662995789442",
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
    },
    {
      id: 47,
      name: "Aron Murray",
      tel: "960-115-4842",
      address: "6256 Kuphal Spring",
      opening_hours: "08:00",
      description:
        "Et minima eligendi sint ipsa ratione repellat ea sit omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.70045072274594",
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
    },
    {
      id: 48,
      name: "Althea Hirthe",
      tel: "(709) 660-7812 x26060",
      address: "29862 Chaya Ways",
      opening_hours: "08:00",
      description:
        "Mollitia possimus a reprehenderit. Atque tempore incidunt et omnis. Harum et nostrum. Deleniti molestiae reprehenderit tempore excepturi ut. Eum deleniti unde cumque ut voluptas est deserunt omnis. Non consequuntur nisi sed sed ratione nemo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.81234464272808",
      viewCounts: 0,
      createdAt: "2022-03-10T16:08:42.000Z",
      updatedAt: "2022-03-10T16:08:42.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-03-10T16:08:42.000Z",
        updatedAt: "2022-03-10T16:08:42.000Z",
      },
    },
    {
      id: 50,
      name: "Leopoldo Boehm",
      tel: "215-403-4269",
      address: "756 Madisyn Ridges",
      opening_hours: "08:00",
      description:
        "Aut iusto animi incidunt praesentium.\nEum sed quis maiores libero officiis necessitatibus consequatur suscipit et.\nEx error ea aut amet aut sint et in.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.32711546078505",
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
    },
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>