import React, { useEffect, useState } from 'react';
import { images } from '../../../Media/Media'
import './CarrosselImg.css';
function CarrosselImg() {

  
  const{
    Story10,
    Story15,
    Story16,
    Story17,
    Story18,
  } = images

  
  const imgs=[
    {id:0,value: Story10},
    {id:1,value: Story15},
    {id:2,value: Story16},
    {id:3,value: Story17},
    {id:4,value: Story18},
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
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="140" width="200" />
        </div>
        )}
      </div>
    </div>
  );
}

export default CarrosselImg;