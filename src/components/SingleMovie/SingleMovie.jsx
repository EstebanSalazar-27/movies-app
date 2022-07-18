import React from 'react'
import { Link } from 'react-router-dom'
import "./singleMovie.css"
import { HeadingH3 } from '../HeadingH3/HeadingH3'

export const SingleMovie = ({ title, poster, type, year, imdbID }) => {
    console.log(poster)



    return (
        <Link to={`/details/${imdbID}`} className='card relative basis-2/5   sm:basis-full min-h-[300px] max-w-[300px] border-blue-900/50 shadow-md  border flex flex-col   items-center shrink-0 bg-slate-800'>
            <div>
                <img src={poster} className={`block aspect-video object-cover bg-slate-600 ${poster === "N/A" && "animate-pulse"}  min-h-[420px] max-w-[300px] max-h-[442px]  min-w-[220px] w-full   `} alt={title} />
            </div>

            <div className='p-2 w-full flex flex-col gap-2 z-10'>
                <h2 className='text-slate-200 '>{title}</h2>
                <div className='flex w-full justify-between  capitalize'>
                    <HeadingH3 cl="text-slate-300">
                        Type: {type}
                    </HeadingH3>

                </div>
            </div>
            <div className="absolute top-2 left-2  px-2 rounded-sm bg-black/80">
                <HeadingH3 cl="text-white" size="text-sm">
                    {year}
                </HeadingH3>
            </div>

        </Link>
    )
}
