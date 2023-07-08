import React,{useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Layout from '../../component/admin/Layout'
import Navbar from '../../component/Navbar'
import TambahNilaiHp from '../../component/admin/TambahNilaiHp'


const TmbNilaiHp = () => {
    const timeout = useRef(null)
    const his= useHistory()
    const checkAuth=()=>{
        axios.get("http://localhost:8000/isAuth",{
            headers:{
             "x-access-token":localStorage.getItem("Ecomtoken")
            }
        }).then((response)=>{
         //  console.log()
         if(!response.data.login)
         {
             his.push("/");
         }
        })
     
     }
 
     useEffect(()=>{
        timeout.current=setTimeout(checkAuth,1000)
        return function(){
            if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        }
        
 
     },[])
    return (
        <>
        <Navbar/>
        <Layout>
              <TambahNilaiHp/>
        </Layout>
            
        </>
    )
}

export default TmbNilaiHp;
