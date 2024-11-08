<template>
    <Summery />
    <Skills />
    <Experience />
    <Links />
    <Footer />
</template>
<script setup lang="ts">
useHead({
  title: 'Eugene Moskalenko'
})
useServerSeoMeta({
  title: 'Eugene Moskalenko - Software Engineer',
  ogTitle: 'Eugene Moskalenko - Software Engineer',
  description: 'Eugene Moskalenko is a software engineer with a passion for developing innovative solutions. He has a strong background in programming languages and frameworks, as well as experience with various technologies.',
  ogDescription: 'Eugene Moskalenko is a software engineer with a passion for developing innovative solutions. He has a strong background in programming languages and frameworks, as well as experience with various technologies.',
  ogImage: '/public/avatar.webp',
  robots: 'index, follow'
})
</script>