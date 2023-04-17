import React from 'react'
import { useState } from 'react'

const SearchHeader = ({getImageProps}) => {
    const [value, setValue] = useState("")
    const handleChange= (e)=>{
        const searchInputText = e.target.value;
        setValue(searchInputText);

    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        getImageProps(value);
    }
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <label style={{display : "block", color : "red"}}>Ne arıyorsunuz?</label>
        <input value={value} onChange={handleChange}/>
        
        </form>
    </div>
  )
}

export default SearchHeader