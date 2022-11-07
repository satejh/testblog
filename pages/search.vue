<template>
  <div class="pt-20 pb-64">
    <section class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>

        <input type="text" @keyup="search" class="
            w-full
            py-3
            pl-10
            pr-4
            text-gray-700
            bg-white
            border border-gray-300
            rounded-md
            dark:bg-gray-800
            dark:text-gray-300
            dark:border-gray-600
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none
            focus:ring
          " placeholder="Search" v-model="query" />
      </div>
      
      <div v-if="items.length">
        <div class="
            absolute
            inset-x-0
            px-6
            py-3
            mx-5
            mt-4
            overflow-y-auto
            bg-white
            border border-gray-300
            rounded-md
            max-h-72
            dark:bg-gray-800
            dark:border-transparent
          ">

          <a href="" class="block py-1" v-for="(item, index) in items" :key="index">
            <NuxtLink :to="{ path: '/posts/' + item.Url }" class="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 
              shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 
              dark:hover:bg-gray-700">
              <p class="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {{
                item.Title
                }}
              </p>
              <p class="font-small text-gray-700 dark:text-gray-400">{{item.Context}}</p>
            </NuxtLink>

          </a>
        </div>
      </div>




    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let item = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs{
    Title,
    Url,
    id,
    Context
  }
}  `,
      },
    });
    const preitems = item.data.data.blogs;
    return { preitems };
  },
  data() {
    return {
      query: "",
      preitems: [],
      items: [],
    };
  },
  mounted() { },
  methods: {
    async search() {
      //var item = await this.$axios.get("/blogs?Title_contains=" + this.query);
      // var item = await this.$axios({
      //   url: "graphql",
      //    method: "post",
      //    data: {
      //      query: `
      //query custom{
      //blogs{
      //  Title,
      //  id,
      //  Date,
      //  category{
      //    name
      //   },
      // }
      //}  `,
      // },
      // });
      // this.items = item.data.data.blogs;
      //console.log(this.items);
      //this.items = this.items.filter(o=>Object.values(o).includes(searchText))
      this.items = this.preitems.filter(o => o["Title"].toLowerCase().includes(this.query.toLowerCase()))
      //console.log(this.items);
    },
  },
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>