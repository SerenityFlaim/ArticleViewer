import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import articleService from '../services/Article';

export const Types = {
    request_status: {
        REQUESTED: 'REQUESTED',
        SUCCEEDED: 'SUCCEEDED',
        FAILED: 'FAILED'
    }
}

export const articleStore = defineStore('store', () => {
    const articles = ref([])
    const status = ref(null)
    let controller = null;

    async function fetchArticles() {
        if (articles.value.length > 0) {
            status.value = Types.request_status.SUCCEEDED;
            return;
        }

        controller = new AbortController();
        status.value = Types.request_status.REQUESTED

        try {
            const json = await articleService.fetchArticles(controller.signal)
            articles.value = json
            status.value = Types.request_status.SUCCEEDED
        } 
        catch (error) {
            status.value = Types.request_status.FAILED
            console.log("Store fetch error:", error)
        } 
        finally {
            controller = null;
        }
    }

    function cancelFetch() {
        if (controller) {
            controller.abort();
            status.value = null;
        }
    }

    function addArticle(article) {
        let last_id = articles.value.length
        let newArticle = {
            id: last_id + 1,
            ...article
        }
        articles.value.push(newArticle)
    }

    function togglePublishStatus(id) {
        const article = articles.value.find((a) => a.id == id)
        article.isPublished = !article.isPublished
    }

    return { articles, status, fetchArticles, cancelFetch, addArticle, togglePublishStatus}
})