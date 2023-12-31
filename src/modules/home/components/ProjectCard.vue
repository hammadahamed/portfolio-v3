<script setup>
import { defineProps } from 'vue';
import LinkSvg from '@assets/svg/link.svg';
import NewTab from '@assets/svg/newtab.svg';
import LockedSvg from '@assets/svg/locked.svg';
import useAssets from '../../../common/useAssets';
import Utils from '../../../common/utils';

const props = defineProps({
    project: {
        type: Object,
    }
});


</script>
<template>
    <div class="project-card flex flex-col-reverse sm:flex-row gap-5"
        @click="() => Utils.openInNew(props.project?.hostedURL ?? props.project.repo)">
        <div class="left">
            <div class="img-w mt-5 sm:mt-0">
                <img class="rounded-md" :src="useAssets(props.project?.resource)" alt="">
            </div>
        </div>
        <div class="right text-slate-100">
            <h3 class="title text-lg flex gap-0">{{ props.project?.title }} <span>
                    <NewTab class="app-icon" />
                </span> </h3>
            <p class="desc">
                {{ props.project?.description }}
            </p>


            <div v-if="props.project?.repo || props.project?.private" class="source-code w-max"
                @click="(event) => Utils.openInNew(props.project?.repo, event)">
                <LockedSvg v-if="props.project?.private" class="app-icon" />
                <LinkSvg v-else class="app-icon" />
                <div> {{ props.project?.private ? 'Repo is private for now' : 'Source Code' }}</div>
            </div>
            <div class="skills mt-5">
                <div v-for="tech in props.project?.techStack"
                    class="skill-item text-indigo-200 px-3 rounded-full w-min font-semibol text-nowrap whitespace-nowrap">
                    {{ tech }}
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
.project-card {
    padding: 20px;
    transition: all .2s ease;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 15px;

    .left {
        flex: 1;

        img {
            transition: all .2s ease;
            border: 1px solid rgba(255, 255, 255, 0.158);
        }
    }

    .right {
        flex: 2;

        .title {
            translate: 0 -4px;

            .app-icon {
                translate: 5px 3px;
                transition: all .2s ease;
            }

            .app-icon-fill {
                transition: all .2s ease;
                stroke: white;
                stroke-width: 2px;
            }
        }

        .desc {
            font-size: 1.08rem;
            padding-top: 10px;
        }

        .source-code {
            display: flex;
            gap: 5px;
            margin-top: 15px;
            margin-left: 4px;

            &:hover {
                color: var(--app-primary);
            }

            .title {
                .app-icon-fill {
                    stroke: var(--app-primary) !important;
                }
            }

            .app-icon-fill {
                stroke: white !important;
            }

            .app-icon {
                translate: 0px 2px;
            }

            &:hover {
                .app-icon-fill {
                    stroke: var(--app-primary) !important;
                }
            }
        }

        .app-icon {
            height: 15px;
            width: 15px;

            svg {
                fill: white !important;

                path {
                    stroke: white !important;
                }
            }
        }


    }

    &:hover {
        background: rgba(255, 255, 255, 0.06);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(8.7px);

        h3 {
            color: var(--app-primary);
        }

        img {
            border: 1px solid rgba(255, 255, 255, 0.403);
            border-radius: 6px;
        }

        .title {
            .app-icon {
                translate: 8px 0px;

            }

            .app-icon-fill {
                stroke: var(--app-primary);
            }
        }
    }
}
</style>