import React, { useContext, useEffect, useState } from 'react'
import { SearchKeywordContext } from '../../context/searchKeyword'
import { useNavigate } from 'react-router-dom'
export const SearchBar = () => {
    const [formData, setFormData] = useState({
        searchValue: "",
        selectedFilter: ""
    })
    const navigate = useNavigate()

    const { keyword, type, setType, setKeyword } = useContext(SearchKeywordContext)
    console.log(type)
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`search/${keyword}`)
    }
    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    useEffect(() => {
        setKeyword(formData.searchValue)
    }, [formData.searchValue]);

    useEffect(() => {
        setType(formData.selectedFilter)
    }, [formData.selectedFilter])
    return (
        <div className='w-full h-max py-5 mb-10 flex  flex-col items-center'>
            <form className='w-full max-w-3xl ' onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">

                    <select name="selectedFilter" onChange={handleChange} className='absolute -left-20 outline-none text-center h-full bg-slate-50/70 rounded-sm ' id="">
                        <option className='text-slate-900' selected disabled value>All</option>
                        <option className='text-slate-900 ' name="movies" value="movie">Movies</option>
                        <option className='text-slate-900' name="series" value="series">Series</option>
                    </select>

                    <input name="searchValue" type="search" onChange={handleChange} id="default-search" className="block outline-none p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50/70 rounded-sm border border-gray-300 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 placeholder:text-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies, Series." />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
    )
}
