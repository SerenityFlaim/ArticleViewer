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
            let last_id = this.articles.length
            let newArticle = {
                id: last_id + 1,
                ...article
            }
            this.articles.push(newArticle)
        },

        togglePublishStatus(id) {
            const article = this.articles.find((a) => a.id == id)
            article.isPublished = !article.isPublished
        }
    }
})