import './App.css';
//import axios from "axios"
import {useEffect,useState} from "react"
import { Container, Switch, withStyles } from '@material-ui/core';
import Headers from './components/header/header';
import Definition from './components/definition/Definition';
import { grey, purple } from '@material-ui/core/colors';

const DarkMode = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[500],
    },
    '&$checked + $track': {
      backgroundColor:grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

function App() {

  const [lightMode, setlightMode] = useState(false)
  const [meanings,setMeanings] = useState('');
  const [word,setWord ] = useState([]);
  const [category, setCategory] = useState("en");
  const [error, setError] = useState('')

  const DictionaryApi = async() =>{
      
    try{
      let api =  `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      fetch(api)
      .then(response =>{
        if(response.ok){
          let data = response.json()
          return data
        }
        else{
          setError("word not found")
          throw console.log("error");
        }
        
      })
      .then(data =>{
        setMeanings(data)
        setError('')
      })
      
    }catch(error){

       console.log(error);

    }
    
  }
  

  useEffect(() => {

    DictionaryApi();

  }, [word,category]);


  return (
    <div className="App " style={{backgroundColor:lightMode?"#282c32":"rgba(255, 255, 255, 0.55)"}}>
      
      <div className="container" style={{height:"100vh",backgroundColor:lightMode?"#fff":"#282c32" ,color:"white"}}>
        <Container maxWidth="md" style={{display :"flex",flexDirection:"column",height:"90vh",justifyContent:"space-around"}} >
         <div style={{position:"absolute",top:0,paddingTop:10}}>
               <DarkMode checked={lightMode} onChange={() => setlightMode(!lightMode)} />
               </div>
        <Headers category = {category} word = {word} setWord={setWord} setCategory={setCategory} lightMode={lightMode}/>
        {meanings && (
          <Definition word={word} meanings={meanings} error={error} category={category} lightMode={lightMode}/>
        )}
      </Container>
      </div>
    </div>
  );
}

export default App;
