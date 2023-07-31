import React from 'react'
import letter from './letterM.jpg'
import Block2, { Block3 } from './Block2'
import './Reactpro.css'
import Table from './Table'


const Reactpro = () => {
  const arr = ["Solutions", "Integration", "Customers", "Plans", " Resources", "Company"]
  const sign = "sign in"
  return (<>
    <div>
      <div style={{ backgroundColor: 'black' }}>
        <div class="ui secondary  menu" >
          <img src={letter} height='60px' width='60px' />
          <a class="active item" style={{ color: 'aqua', fontSize: '25px', paddingLeft: '0px' }}>
            <b>mosaic</b>
          </a>
          <a class="active item" style={{ color: 'white', paddingLeft: '80px' }}>
            Platform
          </a>
          {
            arr.map(
              (value, index) => <a key={index} className="aa">{value}</a>
            )
          }
          <a class="ab">{sign}</a>
          <Block3/>
        </div>
      </div>
    </div>
    <Block2/>
    <div style={{paddingTop:"300px"}}>
      <Table/>
    </div>
    
    
    
  </>)
}
export default Reactpro


