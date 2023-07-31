import React from 'react'
import './Reactpro.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import Box from './Box'
//import Table from './Table'


const Block2 = () => {
    const Imgarr = [
        {
            id: "1",
            img: img1,
        },
        {
            id: "2",
            img: img2,
        },
        {
            id: "3",
            img: img3,
        },
        {
            id: "4",
            img: img4,
        },
    ]


    return (<>
        <div style={{ backgroundColor: "black" }}>
            <center>
                <p className='block2'>Equip your business with<br></br> world class Software </p>
                <p className='blomat'>Bring your Entire financial Blue print into focus with a Strategic Finance<br></br>Platform that connects and drives the business in real-time.</p><br></br>
                <div>
                    {
                        Imgarr.map((item) => {
                            return (
                                <div key={item.id} className="imag">
                                    <img src={item.img} className="imag1"></img>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </center>
            <Box/>
            
        </div>
        
    </>)
}


export const Block3 = () => {
    return (
        <div>
            <button className='buton'>Request a Demo</button>
        </div>
    )
}
export default Block2

