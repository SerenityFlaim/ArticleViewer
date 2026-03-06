import { createWebHistory, createRouter } from 'vue-router'
import { articleStore } from '../store'
import NewArticle from '../views/NewArticle.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleList from '../components/ArticleList.vue'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: ArticleList
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
        props: (route) => {
            const store = articleStore()
            const article = store.articles.find((x) => x.id == route.params.id)
            return article ? {...article} : {}
        }
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