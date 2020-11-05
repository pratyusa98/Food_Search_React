
import React,{useState,useEffect} from "react"
import './App.css';
import Header from './compmonents/Header'
import Recipes from './compmonents/Recipes'
import Axios from 'axios'



function App() {

  

  const [search,setSearch] = useState("chicken");

  const [recipies,setSearche] = useState([])

  // const APP_ID = "e31c73c0";
  // const APP_KEY = "fdce7d7c48adce412b98f9f1e2487ed6";
  


  
  const getRecipies = async () =>{

    const res = await Axios.get(`https://api.edamam.com/search?q=${search}
    &app_id=e31c73c0&app_key=fdce7d7c48adce412b98f9f1e2487ed6`);
  
  console.log(res)
  setSearche(res.data.hits);
};
useEffect( ()=> {

  getRecipies()
 
  
   })

  const OnInputChange = (e) => {
    setSearch(e.target.value)
  }

  const onSearchClick = () => {
    getRecipies()
  }

  return (
    <div className="App">
     <Header search = {search} OnInputChange = {OnInputChange} onSearchClick={onSearchClick}/>
     <h2 className="text-center">Here All Recipi......</h2>
     <div className='Container'> <Recipes recipies = {recipies}/></div>
    
    </div>
  );
}

export default App;
