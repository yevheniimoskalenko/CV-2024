<template>
<section class=" my-3">
    <h2 class=" font-bold md:text-xl uppercase">SKILLS</h2>
    <ul>
        <li v-for="(skill, index) in skills" :key="index" class=" list-disc ml-10  py-1">
            <strong>{{  skill.key }}: </strong>
            <span>{{ skill.value }}</span>
        </li>
    </ul>
</section>
</template>
<script setup lang="ts">
const skills = ref([
{
    key: "Web Languages",
    value: "JavaScript (ES6+), TypeScript"
},
{
    key: "JS Frameworks",
    value: "Vue.js (2/3), Nuxt.js (2/3), Express.js, Sanity.js, Nest.js, React"
},
{
    key: "Cloud & Tools",
    value: "AWS, Docker, Jenkins"
},
{
    key: "CSS Frameworks",
    value: "Tailwind.css, Bootstrap, Vuetify, Element.io"
},
{
    key: "Database",
    value: "SQL (MySQL, Postgres), MongoDB (Mongoose)"
},
{
    key: "Version Control",
    value: "GitHub, GitLab"
},
{
    key: "Testing",
    value: "Testing Library Playwright"
},
{
    key: "Methodologies",
    value: "Agile (Scrum, Kanban), CI/CD Pipelines"
},
{
    key: "Architecture",
    value: "Microservices, Server-Side Rendering (SSR), MVC"
},
{
    key: "Performance Optimization",
    value: "Performance Monitoring, Lighthouse, PageSpeed Insights"
},
{
    key: "Other",
    value: "RESTful API, JWT, Docker, Responsive Design"
}
])
</script>