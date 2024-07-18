import React from 'react'
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
const  Settings = () => {
  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})
useEffect(() => {
  const root = document.documentElement
  for(let key in settings){
      root.style.setProperty(key, settings[key])
  }
}, [settings])
  const themes = [
    {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757"
    },
    {
        "--background-color": "black",
        "--background-light": "rgb(77, 77, 77)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#ffffff",
        "--text-light": "#eceaea",
    }
  ]
  const [theme,setTheme]=useState('light');
  const [primarycolor,setPrimarycolor]=useState(0);
  const [fontSize,setFontSize]=useState(1);  
  const [animationSpeed,setanimationSpeed]=useState(1);
  const primarycolors=[
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39,176)",
  ];
  const fontSizes=[
    {
      title:"small",
      value:"12px"
    },
    {
      title:"Medium",
      value:"16px"
    },
    {
      title:"Large",
      value:"20px"
    }
  ]
  const animationSpeeds=[
    {
      title:"Slow",
      value:2
    },
    {
      title:"Medium",
      value:1
    },
    {
      title:"Fast",
      value:-5
    }
  ]
  function changeTheme(i){
    const _theme = {...themes[i]}
    setTheme(i === 0 ? "light" : "dark")
    let _settings = {...settings}
    for(let key in _theme){
        _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }

  function changeColor(i){
    const _color = primarycolors[i]
    let _settings = {...settings}
    _settings["--primary-color"] = _color
    setPrimarycolor(i)
    setSettings(_settings) 
  }

function changeFontSize(i){
    const _size = fontSizes[i]
    let _settings = {...settings}
    _settings["--font-size"] = _size.value
    setFontSize(i)
    setSettings(_settings)
  }

function changeAnimationSpeed(i){
    let _speed = animationSpeeds[i]
    let _settings = {...settings}
    _settings["--animation-speed"] = _speed.value
    setanimationSpeed(i)
    setSettings(_settings)
  }

  
  
  return (
    <div>
      <div className='section d-block'>
        <h2>Preference Theme</h2>
        <div className='options'>
          <div className='opt light' onClick={()=>changeTheme(0)}>
            {theme === 'light' && (
              <div className='check'>
              <FontAwesomeIcon icon={faCheck} />
               </div>
            ) }
          </div>
          <div className='opt dark' onClick={()=>changeTheme(1)}>
             {theme === 'dark' && (
              <div className='check'>
              <FontAwesomeIcon icon={faCheck} />
               </div>
            ) }
          </div>
        </div>
      </div>
      <div className='section d-block'>
        <h2>Preference Color</h2>
        <div className='options'>
          {
            primarycolors.map((color,index)=>(
              <div key={index} className='opt light' style={{backgroundColor:color}} onClick={()=>changeColor(index)}>
            {primarycolor === index && (
              <div className='check'>
              <FontAwesomeIcon icon={faCheck} />
               </div>
            ) }
          </div>
            ))
          }
        </div>
        <div className='section d-block'>
        <h2>Font size</h2>
        <div className='options'>
          {
            fontSizes.map((size,index)=>(
              <button className='btn' onClick={()=>changeFontSize(index)}>
                {size.title}
                {fontSize===index &&  <span><FontAwesomeIcon icon={faCheck} /></span>}
              </button>
            ))
          }
        </div>
        </div>
        <div className='section d-block'>
        <h2>Animation speed</h2>
        <div className='options'>
          {
            animationSpeeds.map((speed,index)=>(
              <button className='btn' onClick={()=>changeAnimationSpeed(index)}>
                {speed.title}
                {animationSpeed===index &&  <span><FontAwesomeIcon icon={faCheck} /></span>}
              </button>
            ))
          }
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Settings
