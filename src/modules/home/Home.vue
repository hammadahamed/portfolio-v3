<script setup>
import { onMounted } from 'vue';
import About from './About.vue';
import Experience from './Experience.vue';
import Projects from './Projects.vue';

import AuthorImg from '../../assets/svg/author_bg_v3.svg';
import Socials from './components/Socials.vue';
import useAssets from '../../common/useAssets';

function setCursorLuminisation() {
    document.addEventListener('mousemove', function (e) {
        // Get the mouse coordinates
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        // Select the element with the class "ring"
        const luminousPointer = document.getElementById('luminous-pointer');

        // Set the CSS transform property of the "ring" element
        luminousPointer.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(82, 82, 242, 0.1), transparent 80%)`;
    });
}

onMounted(() => {
    setCursorLuminisation();
})
</script>
<template>
    <div id="luminous-pointer" class="wrapper absolute h-screen w-screen overflow-hidden"
        style="background: radial-gradient(600px at 150px 50px, rgba(82, 82, 242, 0.1), transparent 80%);">
        <!-- <div class="intro absolute h-screen w-screen bg-indigo-50 top-0">

        </div> -->

        <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
            <div class="block lg:flex lg:justify-between lg:gap-4 overflow-y-scroll" style="height: calc(100vh - 0px);">
                <header
                    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">

                    <div>
                        <!-- AUTHOR IMG -->
                        <div class="author-img-w relative h-64 w-64">
                            <AuthorImg />

                            <img class="author-img w-48" :src="useAssets('profile-pic.png')" alt="Author">
                        </div>
                        <h1 class="text-4xl font-medium mt-8 tracking-tight text-slate-200 sm:text-5xl">
                            <a href="/">Hammad Ahamed</a>
                        </h1>

                        <h2 class="mt-3 text-md font-normal tracking-tight text-slate-200 sm:text-lg">
                            Experienced Full-Stack Developer
                        </h2>

                        <p class="mt-4 max-w-xs leading-normal">I build exceptional and accessible digital experiences for
                            the
                            web.</p>

                        <br><br>
                        <Socials />

                    </div>
                </header>


                <!-- RIGHT -->
                <main class="pt-24 lg:w-1/2 lg:py-24">
                    <About />
                    <Experience />
                    <Projects />

                    <br>
                    <br><br>

                    <p>Developed with <span class="app-highlight">Vue.js</span> and
                        <span class="app-highlight">Tailwind, Scss</span>, deployed with <span
                            class="app-highlight">Firebase</span>.
                    </p>
                    <p>Loosely designed in <span class="app-highlight">head</span>, inspired from <span
                            class="app-highlight">brittanychiang.com</span> and coded in <span class="app-highlight">Visual
                            Studio Code</span> by yours
                        truly.
                    </p>
                    <br>
                    <br><br><br>
                    <br><br>
                    <br>
                </main>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped src="./home.scss"></style>