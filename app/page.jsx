'use client'
import Image from 'next/image'
import Header from './components/Header'
import Search from './components/Search'
import Recipes from './components/Recipes'
import {useState,useEffect} from 'react'
export default function Home() {
  const [recipes,setRecipes] = useState([]);


  return (
    <main>
      <Header></Header>
      <Search getSearchResults = {(results)=> setRecipes(results)}></Search>
      <Recipes recipes={recipes}></Recipes>
    </main>
  )
}
