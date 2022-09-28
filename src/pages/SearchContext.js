import React, { useState, useContext } from 'react'

const SearchContext = React.createContext()
const SetSearchContext = React.createContext()

export function useSearch() {
  return useContext(SearchContext)
}

export function useSetSearch(e) {
  return useContext(SetSearchContext)
}

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')

  function searchFilter(e) {
    setSearch(e.target.value)
  }
  return (
    <SearchContext.Provider value={search}>
      <SetSearchContext.Provider value={searchFilter}>
        {children}
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  )
}
