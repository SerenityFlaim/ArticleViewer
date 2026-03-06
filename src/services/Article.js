const articleService = {
    fetchArticles: async function fetchArticles() {
        const url = "http://localhost:5174/articles"
        try{
            const response = await fetch(url)
            if (!response.ok){
                throw new Error(`Response status: ${response.status}`)
            }

            const json = await response.json()
            return json
        } catch (error) {
            console.error(error.message)
        }
    }
}

export default articleService;