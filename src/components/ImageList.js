import React from 'react'
import ImageItem from './ImageItem'

const ImageList = ({resimler}) => {
  return (
    <div>
        {resimler.map((item,index)=>{
            return <ImageItem key={index} resimler2={item.urls.small}/>
        })}
    </div>
  )
}

export default ImageList