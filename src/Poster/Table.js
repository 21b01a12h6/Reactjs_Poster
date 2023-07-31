import React from 'react'

const Table = () => {
    const Tab = [
      {
        id : "1",
        txt : "Dynamic analysis and dashboarding with canvas",
        tc  : true,
        tc1 :  "",
        tc2 : true,
      },
      {
        id : "2",
        txt : "125+ out of the box SaaS Matrices",
        tc : true,
        tc1 :  "",
        tc2 : true,
      },
      {
        id : "3",
        txt : "Transaction- level drilldown",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },
      {
        id : "4",
        txt : "On-demand financial statements",
        tc : true,
        tc1 :  true,
        tc2 : true,
      },
      {
        id : "5",
        txt : "custom financial reportr builder",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },
      {
        id : "6",
        txt : "Automated forecast vs Actual",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },
      {
        id : "7",
        txt : "Automated Consolidation,currency Translations and Eliminations",
        tc : true,
        tc1 :  true,
        tc2 : true,
      },
      {
        id : "8",
        txt : "Pre-loaded Matric templates",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },
      {
        id : "9",
        txt : "Osal satting hub",
        tc : true,
        tc1 : true ,
        tc2 : true,
      },
      {
        id : "10",
        txt : "Performance Alerts",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },
      {
        id : "11",
        txt : "Unlimiting Reporting packages",
        tc : true,
        tc1 : "" ,
        tc2 : true,
      },

      
    ]
  return (<>
    <div>
      <table className="ui celled structured table">
                <thead>
                    <tr>
                        <th colSpan={4}>Financial Analytics <i style={{ paddingLeft: "1350px" }} class="minus circle icon"></i></th>

                    </tr>
                    <tr>
                        <th colSpan={0} ></th>
                        <th ><center>Analytics</center></th>
                        <th><center>Planning</center></th>
                        <th><center>Analytics & Planning</center></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Tab.map(
                            (item)=>
                            {
                              return(
                                // <div key={item.id} >
                                <tr >
                                <td>{item.txt}</td>
                                <td>{item.tc?<Table1 />:""}</td>
                                <td>{item.tc1?<Table1 />:""}</td>
                                <td>{item.tc2?<Table1 />:""}</td>
                               
                            </tr>
                            
                              )
                            }  
                        )
                    }
                </tbody>
        </table>
    </div>
  </>)
}

export const Table1 = () => {
  return (
    <div>
      <center>  <i className="check circle outline icon" style={{ color: "dodgerblue", }}></i>  </center>
    </div>
  )
}


export default Table
