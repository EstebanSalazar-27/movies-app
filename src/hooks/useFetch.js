import React, { useState, useEffect } from 'react'
import getMovies from '../helpers/getMovies'
export const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [fetched, setFetched] = useState(false)

    const fetchMovies = async (keyword, type, page) => {
        try {
            setFetched(false)
            setLoading(true)
            const data = await getMovies(keyword, type, page)
            setFetched(true)
            setLoading(false)
            return data
        } catch (error) {
            console.log(error)
        }
    }



    return { loading, fetchMovies }
}
