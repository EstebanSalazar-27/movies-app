
const API_KEY = "5da5cdf0";
const API_URL = `https://omdbapi.com/?apikey=${API_KEY}`
export default async function getMovies(keyword = "alien", type = "", page = Number) {

    const res = await fetch(`${API_URL}&s=${keyword}&type=${type}&page=${page}`)
    const json = await res.json()
    const status = json.Response
    const data = await json.Search
    console.log(res)
    return { status, data }
}

export const getDetail = async (id) => {
    const res = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    const data = await res.json()

    return data
}