import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Index from '../components/pages/index.vue';
import Project from '../components/pages/Project/index.vue';
import Resume from '../components/pages/Resume.vue';

import AllProjects from '../components/pages/Project/AllProjects.vue';
import DisplayLayout from '../components/pages/Project/DisplayLayout.vue';
import GraphicDesign from '../components/pages/Project/GraphicDesign.vue';
import WebsiteDesign from '../components/pages/Project/WebsiteDesign.vue';
import VisualIdentity from '../components/pages/Project/VisualIdentity.vue';
import GameBannerDesign from '../components/pages/Project/GameBannerDesign.vue';
import GameBannerDesignId from '../components/pages/Project/GameBannerDesignId.vue';

const routes: Array<RouteRecordRaw> = [
    { 
        path: '/', 
        component: Index 
    },
    { 
        path: '/project', 
        component: Project,
        children: [
            { 
                path: 'all', 
                component: AllProjects
            },
            { 
                path: 'graphic-design', 
                component: GraphicDesign
            },
            { 
                path: 'website-design', 
                component: WebsiteDesign
            },
            { 
                path: 'display-layout', 
                component: DisplayLayout
            },
            { 
                path: 'visual-identity', 
                component: VisualIdentity
            },
            { 
                path: 'game-banner-design', 
                component: GameBannerDesign
            },
            { 
                path: 'game-banner-design/:id', 
                component: GameBannerDesignId
            }
        ]
    },
    { 
        path: '/resume', 
        component: Resume 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
