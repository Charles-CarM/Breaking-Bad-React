import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'


const App = () => {
  //const [items, setItems] = useState([])
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true) 
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      setItems(result.data)
      setIsLoading(false)
    }
    getItems()
  }, [])

  //Get current Items
  const indexOfLastItem = currentPage * postsPerPage
  const indexOfFirstItem = indexOfLastItem - postsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
  console.log(currentItems)
  
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={currentItems} />
    </div>
  );
}

export default App;
