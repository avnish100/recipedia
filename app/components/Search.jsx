'use client'
import {React,useState} from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = ({getSearchResults}) =>{
    const [query,setQuery] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const options = {method: 'GET',
        headers: {
          'X-RapidAPI-Key': '82b9499e05msh0985a72e506510dp1e67a6jsn09231656bed4',
          'X-RapidAPI-Host': 'bbc-good-food-api.p.rapidapi.com'
        }}
        const res = await fetch(`https://bbc-good-food-api.p.rapidapi.com/search?query=${query}`,options);
        const recipes = await res.json();
        
        getSearchResults(recipes.results)
        
    }
  return (
    <form onSubmit = {handleSubmit} className='search-bar'>
        <FaSearch ></FaSearch>
        <input type='text' className='search-input' placeholder='Search for recipes..' value={query} onChange={(e) => setQuery(e.target.value)}/>
        
        <button className='search-button' type='submit'>
            Search
        </button>
    </form>
  )
}

export default Search