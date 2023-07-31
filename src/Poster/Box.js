import React from 'react'
import { Block3 } from './Block2'
import img5 from './img5.jpg'
import './Reactpro.css'
//import Table from './Table'

const Box = () => {
    const sty=[
        {
            id : "1",
            head : "Analytics",
            b1 : "Drive Performance and cross-functional collaboration with easy-to-use Analytics tools.",
            b2 : "Get answers in read-time",
            b3 : "Report on what matters",
        },
        {
            id : "2",
            head : "Planning",
            b1 : "Model and adapt to rapidly changing conditions with flexible financial planning.",
            b2 : "Collaborate seemlessly",
            b3 : "Update plans on the fly",
        },
        {
            id : "3",
            head : "Analytics & Planning",
            b1 : "Continue our Analytics and Planning engines for powerful strategic finance solutions.",
            b2 : "See every corner of the business",
            b3 : "Make better investment ",
        },
    ]
  return (
    <div>
      
      <div className='mat'>
      <img src = {img5} className="box"/>
        {
            sty.map(
                (item)=>{
                    return(
                        <div style={{paddingTop:"20px"}}>
                            <b>{item.head}</b>
                        <div style={{paddingTop:"20px"}}>
                        
                        <p>{item.b1}</p>
                        <div style={{display:"inline-flex", paddingTop:"10px"}}>
                        <i class="check icon" style={{ color: "green" }}></i><p>{item.b2}</p>
                            </div>
                        <div style={{display:"inline-flex"}}>
                        <i class="check icon" style={{ color: "green" }}></i><p>{item.b3}</p>
                        
                            </div>
                            </div>
                        <Block3/>
                            
                        </div>
                    )
                }
            )
        }
      </div>
      
    </div>
    
  )
}

export default Box
