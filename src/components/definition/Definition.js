import React from 'react'
import './Definition.css'
const Definition = ({word,category,meanings,error,lightMode}) => {
    return (
        <div className="meanings mt-5" >
            {error  &&(
                <>
               <span style={{color:lightMode?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"}}>{error}</span>
               <span style={{color:lightMode?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"}}>Does You Mean this?</span></>
            )}
            {
                meanings[0] && word && category === 'en' &&(
                    
                    <audio controls src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}style={{width:"100%",backgroundColor:"#fff",borderRadius:10}}>
                        Your Browser doesn't support audio element.
                    </audio>
                    
                )
            }
            {
                word === ""?(
                <span style={{color:lightMode?"rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"}}className="subTitle">Start by typing a word</span>
                ):(
                    
                    meanings.map((mean)=>(
                        mean.meanings.map((item)=>(
                            item.definitions.map((def)=>(
                                <div className="singleMean"
                                     style={{backgroundColor:lightMode?" rgba(220, 221, 221, 0.87)":" rgba(255, 255, 255, 0.55)", color:"rgba(70, 70, 72, 1)"}}>
                                   <b>Word:{mean.word}</b><br></br>
                                   <b>Definition: {def.definition}</b>
                                   <br></br>
                                   {def.example && (
                                       <>
                                       
                                       <span>
                                           <b>Example :</b>
                                           {def.example}
                                       </span></>
                                   )}
                                   <br></br>
                                   {def.synonyms && (
                                       <span>
                                           <b>Synonyms :</b>
                                           {def.synonyms.map((s)=>`${s}, `)}
                                       </span>
                                   )}
                                   <hr style={{backgroundColor:lightMode?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)",width:"100%"}}/>
                                </div>

                            ))
                        ))
                        
                    ) 
                   )
                )

            }
            
        </div>
    )
}

export default Definition
