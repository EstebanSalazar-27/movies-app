import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeadingH3 } from '../../components/HeadingH3/HeadingH3'
import { getDetail } from '../../helpers/getMovies'
export const Details = () => {
  const [movie, setMovie] = useState([])
  const { movieID } = useParams()

  console.log(movie)
  useEffect(() => {
    getDetail(movieID).then((data) => setMovie(data))
  }, [movieID])

  return (
    <div className='w-full p-2 flex sm:flex-col justify-center gap-4 bg-gradient-to-t'>

      <div>
        <img src={movie.Poster} className={`aspect-video shrink-0 min-w-[300px] min-h-[300px]  ${movie.Poster === "N/A" && "animate-pulse"} bg-slate-600 `} alt="" />
      </div>

      <article className='flex flex-col gap-1'>
        <HeadingH3 size="text-3xl" weight='font-semibold' cl="text-green-600">Titulo Original: {movie.Title}</HeadingH3>
        <HeadingH3 size="text-md" cl="text-slate-100">Imdb:  <span className='text-teal-300/70 text-sm'>{movie.imdbRating}</span></HeadingH3>
        <HeadingH3 size="text-md" cl="text-slate-100">Idiomas:  <span className='text-teal-300/70 text-sm'>{movie.Language}</span></HeadingH3>
        <HeadingH3 size="text-md" cl="text-slate-100">Año:  <span className='text-teal-300/70 text-sm' >{movie.Year}</span></HeadingH3>
        <HeadingH3 size="text-md" cl="text-slate-100">Genero:  <span className='text-teal-300/70 text-sm'>{movie.Genre}</span></HeadingH3>
        <HeadingH3 size="text-md" cl="text-slate-100">Duracion: <span className='text-teal-300/70 text-sm'>{movie.Runtime}</span></HeadingH3>
        <div className='w-full max-w-md'>
          <HeadingH3 size="text-md" cl="text-slate-100">Sipnosis:  <span className='text-teal-300/70 text-sm'>{movie.Plot}</span></HeadingH3>
        </div>
        <HeadingH3 size="text-md" cl="text-slate-100">Reparto: <span className='text-teal-300/70 text-sm'>{movie.Actors}</span> </HeadingH3>


      </article>
    </div>
  )
}
