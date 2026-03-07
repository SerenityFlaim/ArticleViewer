import { createWebHistory, createRouter } from 'vue-router'
import { articleStore } from '../store'
import NewArticle from '../views/NewArticle.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleList from '../components/ArticleList.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: HomeView
    },
    { 
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        component: ArticleView,
        props: (route) => ({id: Number(route.params.id)})
    },
    {
        path: '/new',
        name: 'Add new article',
        component: NewArticle
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router