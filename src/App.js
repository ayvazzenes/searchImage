import "./App.css";
import SearchHeader from "./SearchHeader";
import getApi from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";


function App() {
  const [images, setImages] = useState([])
  const handleGetImageName=async (term)=>{
    
    const result=await getApi(term);
    setImages(result);
    console.log(result);
  }
  return <div className="App">
    <SearchHeader getImageProps={handleGetImageName}/>
    <ImageList resimler ={images}/>
  </div>;
}

export default App;
