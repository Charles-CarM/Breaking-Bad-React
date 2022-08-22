import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Pagination from './components/pagination/Pagination'
import Search from './components/ui/Search'


const App = () => {
  //const [items, setItems] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true) 
  const [query, setQuery] = useState('') 
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }
    getItems()
  }, [])

  //Get current Items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  //change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <div className="container">
      <Header />
      <Search />
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={items.length}
        paginate={paginate} 
      />
    </div>
  );
}

export default App;

//super cool I was able to implement this on the Breaking Bad API project
