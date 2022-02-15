import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import categories from '../../data/category';
import "./header.css"


const header = ({setCategory,category,word,setWord,lightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:lightMode?"#000":"#fff",
            },
          type:lightMode?'light': 'dark',
        },
      });
    const handleChange = (language) =>{
       setCategory(language);
       console.log(language)
       setWord("");
    }
    return (
        <div className="header">
            <span style={{fontWeight:"bold",color:lightMode?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"}} className="title">{word?"Word Hunt":"Word Hunt"}</span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                       className="search" 
                       label="Search a Word"
                       value={word}
                       onChange={(e)=>setWord(e.target.value)}
                                            />
                       
                    <TextField
                        className="select"
                        id="standard-select-currency"
                        select
                        value = {category}
                        onChange={(e)=>handleChange(e.target.value)}
                        label="language"
                        >
                            {
                                categories.map((option)=>(
                                    <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                                ))
                            }
                            
                    </TextField>
                    
                </ThemeProvider>
            
            </div>
        </div>
    )
}

export default header
