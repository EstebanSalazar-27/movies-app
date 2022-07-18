import React, { useContext, useState, useEffect } from 'react'
import { SearchKeywordContext } from '../../context/searchKeyword'
import { useFetch } from '../../hooks/useFetch'
import { Pagination } from '../Pagination/Pagination'
import { SingleMovie } from '../SingleMovie/SingleMovie'

export const ListOfMovies = () => {
  const [movies, setMovies] = useState([])

  const { fetchMovies } = useFetch()
  const { keyword, type, page, setPage } = useContext(SearchKeywordContext)

  console.log(type)
  const nextPage = () => {
    setPage(page + 1)
  }
  const previouslyPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  if (movies) {
    movies.sort((a, b) => {
      return b.Year - a.Year
    })
  }



  console.log(movies)
  useEffect(() => {
    fetchMovies(keyword || "alien", type, page,).then((movie) => setMovies(movie.data))
  }, [keyword, page, type]);

  return (
    <div className='flex flex-col gap-4'>

      <Pagination nextPage={nextPage} previouslyPage={previouslyPage} />

      <div className=' w-full flex flex-wrap gap-2 justify-center '>
        {
          movies?.length
            ?
            movies.map((movie) => {
              return <SingleMovie key={movie.imdbID} title={movie.Title} poster={movie.Poster} type={movie.Type} year={movie.Year} imdbID={movie.imdbID} />
            })
            :
            null
        }
      </div>


    </div>
  )
}
