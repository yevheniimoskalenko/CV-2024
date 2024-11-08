<template>
<footer class=" flex items-center justify-between border-t mt-4 pt-4">
    <span>Made ❤️ with Webflow</span>
    <nav>
        <ul class=" flex gap-x-2 flex-wrap">
            <li v-for="link in links" :key="link.title">
                <NuxtLink target="_blank" :to="link.link" >
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</footer>
</template>
<script setup lang="ts">
const links = ref([
    {
        title: "djinni",
        link: "https://djinni.co/q/2ef525fa97/"
    },
    {
        title: "linkedin",
        link: "https://www.linkedin.com/in/yevhenii-moskalenko/"
    },
    {
        title: "telegram",
        link: "https://t.me/testjokerqwerty"
    },
    {
        title: "instagram",
        link: "https://www.instagram.com/yevhenii.moskalenko/"
    },

    

])
</script>