<script setup>
import Utils from "../../common/utils";
import NewTab from '@assets/svg/newtab.svg';

const experiences = [
    {
        org: "Pando Corp",
        role: "Associate Software Developer",
        period: "OCT 2022 - PRESENT",
        link: "https://pando.ai/",
        techStack: [
            "Flutter",
            "Vue.js",
            "Node.js",
            "Javascript",
            "Typescript",
            "Express.js",
            "Postgres",
            "Mongo DB",
            "Firebase",
            "Docker",
            "Redis",
            "AWS",
            "SCSS",
        ],
        description: `Leading the mobile app development in the team, delivering high-quality user experience and robust functionalities,
        \n
        \n
        While also developing, complex features in web application counter-part of the product, which is a TMS application which tricky horizons.`,
    },
    {
        org: "Applied Materials",
        role: "Associate Software Engineer",
        period: "AUG 2021 - OCT 2022",
        link: "https://www.appliedmaterials.com/in/en.html",
        techStack: [
            "Angular.js",
            "Node.js",
            "D3.js",
            "High Charts",
            "Javascript",
            "Typescript",
            "Express.js",
            "Docker",
            "Jasmine",
            "Jest",
            "SCSS",
        ],
        description: `Developed analytics application in Angular to visualize data with complex associations, supplied from a custom developed structural document.
        Served as Scrum Master during my tenure, providing support and aiding collaborations between cross-functional teams.`,
    },
    {
        org: "Zoho Corp",
        role: "Software Intern",
        period: "FEB - AUG 2021",
        link: "https://www.zoho.com/",
        techStack: ["Javascript", "Typescript", "Ember.js", "Tailwind", "SCSS"],
        description: `Solo-developed the frontend of the first version of a Automation Testing tool used 
        for the internal purpose of the organisation using Ember.js and Tailwind`,
    },
    {
        org: "Swarashiya solutions",
        role: "Flutter Intern",
        period: "NOV 2020 - FEB 2021",
        link: "https://www.swarashiyasolutions.com/",
        techStack: ["Flutter", "Firebase", "Dart"],
        description: `Lead the team of interns in terms of Development, Solutions Design, Coding standards and Code reviews for a Job portal product.`,
    },
];

const viewResume = () => {
    alert("Haven't put it here yet !\nPing me in Linkedin to grab it 😉");
};
</script>
<template>
    <div class="mt-12">
        <h3 class="uppercase text-slate-200 font-bold section-header">
            Experience
        </h3>
        <div class="experience-card" v-for="exp in experiences" @click="Utils.openInNew(exp.link)">
            <div class="app-card lg:flex gap-6">
                <!-- LEFT -->
                <div class="w-max left">
                    <p class="label uppercase text-sm font-semibold flex align-middle">
                        {{ exp.period }}
                    </p>
                </div>
                <!-- RIGHT -->
                <div class="right">
                    <h3 class="text-lg job-title text-slate-200 -mt-1 flex items-center">
                        {{ exp.role }}
                        <p class="mx-2 text-slate-400">•</p>
                        {{ exp.org }}
                        <NewTab class="app-icon" />
                    </h3>
                    <p class="mt-2 job-desc">
                        {{ exp.description }}
                    </p>

                    <div class="skills">
                        <div v-for="tech in exp.techStack" class="skill-item">
                            {{ tech }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex">
            <h5 class="view-resume text-slate-100" @click="viewResume()">
                View Full Resume
            </h5>
        </div>
    </div>
</template>
<style  lang="scss">
.view-resume {
    margin: 30px 0;
    transition: all 0.1s ease;
    cursor: pointer;
    padding-bottom: 2px;
    font-size: 1.1rem;

    &:hover {
        border-bottom: 2px solid var(--app-primary);
    }
}

.skills {
    display: flex;
}

.experience-card {
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;

        .job-title {
            color: var(--app-primary);
        }
    }
}

.experience-card {
    padding: 20px;
    transition: all 0.2s ease;
    border-radius: 6px;

    &:hover {
        background: rgba(255, 255, 255, 0.06);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(8.7px);
    }

    .job-title {
        .app-icon {
            height: 15px;
            width: 15px;

            translate: 5px -2px;
            transition: all .2s ease;

            .app-icon-fill {
                transition: all .2s ease;
                stroke: white;
                stroke-width: 2px;
            }

        }
    }

    &:hover {
        .job-title {
            .app-icon {
                translate: 8px -5px;

                .app-icon-fill {
                    transition: all .2s ease;
                    stroke: var(--app-primary);
                }
            }
        }
    }

    .label {
        letter-spacing: 1px;
    }

    .job-desc {
        line-height: 24px;
        font-weight: 300;
    }
}
</style>
