// import { defineStore } from 'pinia'

// export const articleStore = defineStore('store', {
//     state: () => {
//         return {
//             articles: []
//         }
//     },

//     actions: {
//         fetchArticles() {
//             fetch('./articles.json')
//                 .then(response => response.json())
//                 .then(articles_fetch => this.articles.push(...articles_fetch))
//         },

//         addArticle(article) {
//             let last_id = this.articles.length
//             let newArticle = {
//                 id: last_id + 1,
//                 ...article
//             }
//             this.articles.push(newArticle)
//         },

//         togglePublishStatus(id) {
//             const article = this.articles.find((a) => a.id == id)
//             article.isPublished = !article.isPublished
//         }
//     }
// })


import { defineStore } from "pinia";
import { reactive } from "vue";
import articleService from '../services/Article';


export const articleStore = defineStore('store', () => {
    const articles = reactive([])

    // function fetchArticles() {
    //     fetch('./articles.json')
    //         .then(response => response.json())
    //         .then(articles_fetch => this.articles.push(...articles_fetch))
    // }
    async function fetchArticles() {
        const json = await articleService.fetchArticles()
        console.log(json);
        this.articles.push(...json)
    }


    function addArticle(article) {
        let last_id = this.articles.length
        let newArticle = {
            id: last_id + 1,
            ...article
        }
        this.articles.push(newArticle)
    }

    function togglePublishStatus(id) {
        const article = this.articles.find((a) => a.id == id)
        article.isPublished = !article.isPublished
    }

    return { articles, fetchArticles, addArticle, togglePublishStatus}
})