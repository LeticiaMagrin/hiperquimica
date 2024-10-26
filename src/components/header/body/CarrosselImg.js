import React, { useEffect, useState } from 'react';
import './CarrosselImg.css';
function CarrosselImg() {
  
  const imgs=[
    {id:0,value:"https://picsum.photos/200"},
    {id:1,value:"https://picsum.photos/200?random=1"},
    {id:2,value:"https://picsum.photos/200?random=2"},
    {id:3,value:"https://picsum.photos/200?random=3"},
    {id:4,value:"https://picsum.photos/200?random=4"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [val,setVal] = useState(0)
  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = ()=>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
      <button className='btns' onClick={handlePrevious}>P</button>
      <img src={wordData.value} height="300" width="500" /> 
      <button className='btns' onClick={handleNext}>N</button>
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
      </div>
    </div>
  );
}

export default CarrosselImg;