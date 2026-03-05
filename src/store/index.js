// import { reactive } from 'vue'

// const store = reactive({
//     articles: [],
//     fetchArticles() {
//         fetch('./articles.json')
//             .then(response => response.json())
//             .then(articles_fetch => this.articles.push(...articles_fetch))
//     },
//     addArticle(article) {
//         let last_id = this.articles.length
//         let newArticle = {
//             id: last_id + 1,
//             ...article
//         }
//         this.articles.push(newArticle)
//         console.log(article.title)
//     }
// })

// store.fetchArticles()
// console.log('Fetch data')
// console.log(store.articles)

// export default store

import { defineStore } from 'pinia'

export const articleStore = defineStore('store', {
    state: () => {
        return {
            articles: []
        }
    },

    actions: {
        fetchArticles() {
            fetch('./articles.json')
                .then(response => response.json())
                .then(articles_fetch => this.articles.push(...articles_fetch))
        },

        addArticle(article) {
            console.log(article)
            let last_id = this.articles.length
            console.log("last_id: ", last_id)
            let newArticle = {
                id: last_id + 1,
                ...article
            }
            console.log("added article id:", newArticle.id)
            this.articles.push(newArticle)
            console.log(article.title)
        }
    }
})