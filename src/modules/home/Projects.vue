<script setup>
import ProjectCard from './components/ProjectCard.vue';
import IdeaSvg from '@assets/svg/idea.svg';


const recentWorks = [
    {
        title: "ChatGPT Pro - Chrome extension",
        description: "Chrome extension for ChatGPT with Advanced features like, Speech to Text, DOM Picking, Saved Prompt, Prefix & Suffix prompts",
        techStack: [
            "React",
            "Zustand",
            "Typescript",
            "Reaflow",
            "OpenAi",
            "GPT-3.5 model",
        ],
        hostedURL: "https://chromewebstore.google.com/detail/chatgpt-pro/beemdfkfplebccejjcmjfngjjnmhnkae",
        resource: "chatgpt-pro.png"
    },
    {
        title: "JSON Visualizer",
        description: "A web app to visulaize JSON data in a node base structural flow representation made with React. Built this to get accustomed to React library. Inspire from jsoncrack.com",
        techStack: [
            "React",
            "Zustand",
            "Typescript",
            "Reaflow",
            "Open-source",
        ],
        repo: "https://github.com/hammadahamed/jsonvisualizer",
        hostedURL: "https://jsonvisualizer-v2.web.app/",
        resource: "jsonvisualizer-home.png"
    },
    // {
    //     title: "Revamp Suggestion",
    //     description: "Coded Revamp design suggestion for Analytics app in Angular with Dark/Light modes",
    //     techStack: [
    //         "Angular", "Typescript", "SCSS", "UI/UX", "Chart.js", "Open-source"
    //     ],
    //     repo: "https://github.com/hammadahamed/chisquare-home",
    //     hostedURL: "https://chisquare-v2.web.app/",
    //     resource: "chisqaure.png"
    // }
]

const otherProjects = [
    {
        title: "Cash Flow",
        description: "A mobile application to track & settle debts, much like split-wise, Along with a module for Financial calculator with details tabular visulation",
        techStack: [
            "Flutter", "Firebase", "GetX", "Dart", "UI/UX"
        ],
        repo: "https://github.com/hammadahamed/cash-flow",
        resource: "cashflow.png",
        private: true,

    },
    {
        title: "Agro cloud",
        description: "This app is to monitor and administer one's agricultural land. Senors, motors and switches are connected to the micro-controller connected to the mobile app via internet. This is my University project that i took up to demosntrate my skills in Flutter (Mobile app), Firebase and microcontrollers.", techStack: [
            "Flutter", "Firebase", "Raspberry Pi", "IoT", "Dart",
        ],
        repo: "https://github.com/hammadahamed/agro_cloud",
        resource: "agrocloud.png"
    }
    , {
        title: "Game site",
        description: "This is a simple restaurant menu ordering website design implementation along with a GAME to play in the waiting time. This was developed during an interview to demonstrate my expertise in plain Vanilla JS/HTML/CSS without any framework. Development Duration - 8hrs (approx)", techStack: [
            "HTML", "Vannila CSS", "Vannila Javascript", "UI/UX",
        ],
        repo: "https://github.com/hammadahamed/foodwait-with-die",
        resource: "gameapp.png"
    }
]
</script>
<template>
    <div class="mt-14">
        <h3 class="uppercase text-slate-100 font-bold section-header">Current Pursuits</h3>
        <div class="current-pursuits">
            <IdeaSvg />
            <div>
                <p>Actively learning <span class="app-highlight">Machine Learning</span> & <span
                        class="app-highlight">Blockchain</span></p>
                <p>Will be dropping a Super cool Machine Learning project Super Soon !</p>
            </div>
        </div>
        <br><br><br>
        <h3 class="uppercase text-slate-100 font-bold section-header">Recent Works</h3>
        <div class="projects-wrapper pb-8">
            <ProjectCard v-for="proj in recentWorks" :project="proj" />
        </div>
        <h3 class="uppercase text-slate-100 font-bold section-header">Other Projects</h3>
        <div class="projects-wrapper pb-8">
            <ProjectCard v-for="proj in otherProjects" :project="proj" />
        </div>

    </div>
</template>
<style lang="scss">
.current-pursuits {
    display: flex;
    gap: 20px;
    align-items: center;

    .app-icon-fill {
        fill: var(--app-primary);
        height: 30px;
        width: 30px;
    }
}
</style>