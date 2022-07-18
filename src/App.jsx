import { useState, useEffect } from 'react'
import './App.css'
import { Wrapper } from './layout/Wrapper/Wrapper'
import { SearchBar } from './components/SearchBar/SearchBar'
import { useFetch } from './hooks/useFetch'
import { Loading } from './components/Loading/Loading'
import SearchKeywordProvider from './context/searchKeyword'
import { ListOfMovies } from './components/ListOfMovies/ListOfMovies'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details/Details'


function App() {






  return (
    <SearchKeywordProvider>
      <div className="bg-slate-900 h-full min-h-screen">
        <Wrapper>
          <SearchBar />
          <Routes>
            <Route path='/' element={<ListOfMovies />} />
            <Route path='/search/:keyword' element={<ListOfMovies />} />
            <Route path='details/:movieID' element={<Details />} />

          </Routes>

        </Wrapper>



      </div>
    </SearchKeywordProvider>

  )
}

export default App
