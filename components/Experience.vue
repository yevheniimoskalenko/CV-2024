<template>
<section>
    <h2 class="font-bold  md:text-xl uppercase">Experience</h2>
      <div class=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5"> 
        <div v-for="(item, index) in experience" class="" :key="index">
          <h3 class="text-gray-400 font-light">{{ item.company }}</h3>
          <p class="font-light">{{ item.position }}</p>
          <time :date="item.date" class="text-gray-500 font-light">{{ item.startDate }} — {{ item.endDate }}</time>
        </div>
      </div>
</section>
</template>
<script setup lang="ts">
const experience = ref([
    {
      company: "Freelance",
      position: "Front-end",
      startDate: "Sep 22",
      endDate: "now",
      date: '2024'
    },
    {
      company: "Dzencode",
      position: "Middle front-end",
      startDate: "Sep 21",
      endDate: "Sep 22",
      date: '2022'
    },
    {
      company: "CHM Software",
      position: "Junior front-end",
      startDate: "Jun 21",
      endDate: "Sep 21",
      date: '2021'
    },
    {
      company: "Syject",
      position: "Junior front-end",
      startDate: "Jan 21",
      endDate: "Jun 21",
      date: '2021'
    },
  
])
</script>