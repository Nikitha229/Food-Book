import React from 'react'
import Customimage from "./Customimage";

const ImproveSkillSection = () => {
    const list=[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
  return (
    <div>
       <div className="section improve-skills">
       <div className="col img">
        <img src="/img/gallery/img_10.jpg"/>
        </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item,index)=>(
            <p className='skill-item' key={index}>{item}</p>
        ))}
        <button className="btn">SignUp Now</button>
      </div>
      
    </div>
    </div>
  )
}

export default ImproveSkillSection
