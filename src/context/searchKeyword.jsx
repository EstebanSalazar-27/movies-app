import { createContext, useState } from "react";


export const SearchKeywordContext = createContext()



export default function SearchKeywordProvider({ children }) {
    const [keyword, setKeyword] = useState("")
    const [type, setType] = useState("")
    const [page, setPage] = useState(1)

    return (
        <SearchKeywordContext.Provider value={{ type, keyword, page, setKeyword, setType, setPage }}>
            {children}
        </SearchKeywordContext.Provider>
    )
}

