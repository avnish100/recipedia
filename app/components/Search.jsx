'use client'
import {React,useState} from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = ({getSearchResults}) =>{
    const [query,setQuery] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const apikey = process.env.RAPID_API_KEY
        const options = {method: 'GET',
        headers: {
          'X-RapidAPI-Key': apikey,
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