const articleService = {
    fetchArticles: async function fetchArticles(signal) {
        const url = "http://localhost:5174/articles"
        const response = await fetch(url, {signal})
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json()
    }
}

export default articleService;