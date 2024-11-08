<template>
<section>
    <div class=" w-16 h-20">
        <NuxtImg src="/avatar.webp" width="64" height="80" :placeholder="[64, 80]" class=" rounded-full overflow-hidden object-cover" alt="Yevhenii Moskalenko"/>
    </div>
      <h1 class="text-2xl mt-2">Welcome to my Portfolio 👋</h1>
      <h2 class=" font-bold md:text-xl uppercase">SUMMARY</h2>
      <p class="font-light text-gray-500">
        Experienced Full Stack Developer with 4+ years of professional expertise in
        developing web applications using JavaScript frameworks (Vue.js, Nuxt.js,
        Node.js). Proficient in both front-end and back-end development, with hands-on
        experience in creating dynamic, responsive web solutions and integrating
        headless CMS systems. Skilled in working with databases like MySQL, MongoDB,
        and Postgres, alongside cloud technologies and CI/CD pipeline implementation
        for seamless deployment.
      </p>
      <NuxtLink target="_blank" to="https://cv.djinni.co/34/c1868453bcd1c8bf43cc3d5733e2d3/CV2024_new_Version.pdf" class=" font-bold">My CV</NuxtLink>
</section>
</template>