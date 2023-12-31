<script setup>
import Twitter from '@assets/svg/twitter.svg';
import GitHub from '@assets/svg/github.svg';
import Linkedin from '@assets/svg/linkedin.svg';
import Gmail from '@assets/svg/gmail.svg';
import Utils from '../../../common/utils';

</script>
<template>
    <div class="socials-wrapper">
        <GitHub class="app-icon" @click="Utils.openInNew('https://github.com/hammadahamed')" />
        <Twitter class="app-icon" @click="Utils.openInNew('https://twitter.com/hammadahamedr')" />
        <Linkedin class="app-icon" @click="Utils.openInNew('https://www.linkedin.com/in/hammadahamed/')" />
        <Gmail class="app-icon" @click="Utils.openInNew('mailto:hammadahamed786@gmail.com')" />
    </div>
</template>
<style scoped lang="scss">
.socials-wrapper {
    display: flex;
    gap: 20px;
    cursor: pointer;
    padding: 0 2px;



    .app-icon {
        height: 25px;
        width: 25px;
        transition: all .2s ease;
        opacity: .7;

        &:hover {
            scale: 1.1;
            opacity: 1;
        }
    }

}
</style>