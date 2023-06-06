import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BiCheck} from 'react-icons/bi'

const ListServices = () => {
    const [data, setData] = useState([
      {
        title: 'UI/UX DESIGN',
        description: 'i offer custom graphic designing'

      },

      {
        title: 'WEB DEVELOPMENT',
        description: 'we provide good web services'
      },
      {
        title:'CONTENT CREATION',
        description:'lorem , ipsum dolor sit consectecto'
      }
    ])

    useEffect(() =>{
        getServices()
    }, [])

    const getServices = async () => {
        const response = await axios.get('http://localhost:5000/api/service/services')
        setData(response.data.services)
    }
    console.log(data)
    return data.map((d)=>{
        return(

        <article className='service' key={d._id}>
          <div className="service__head">
            <h3>{d.title}</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list__icon'/> 
              <p> {d.description} </p>
            </li>
          </ul>
        </article>

       )
    })

    ;
}

export default ListServices;
