import React,{useEffect,useRef} from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'
import AllProducts from '../component/AllProducts'
// import { DataContext } from '../context/DataContext'
import axios from 'axios'
import Navbar from '../component/Navbar'

const Home = () => {

    
    return (
        <>
        <Navbar/>
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 mb-3 mx-auto">
                        <h1>Welcome to <span>GreenX World</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quos.</p>
                        <button className="btn btn-outline-success">Read More</button>

                    </div>
                    <div className="col-md-6 col-12 mb-3 mx-auto">
                        <img src="../img/one.svg" alt="home " className="img-fluid main-img" />
                        
                        </div>
                </div>
            </div>
        </div>
            <AllProducts/>
            <div className="desc">
                <div className="container-fluid">
                    <div className="row">
                <div className="col-md-6 col-12 mx-auto mb-3 ">
                    <img src="../img/envv.svg" alt="ok" className="img-fluid side-img" />
                </div>
                    <div className=" col-md-6 col-12 mx-auto mb-3 d-flex justify-content-center align-items-center flex-column">
                    <h1>Welcome to <span>GreenX World</span> </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate aspernatur, aperiam consequatur fugiat nisi! At labore corrupti, non vitae libero obcaecati, necessitatibus, odio facilis aliquid odit nulla porro itaque.</p>
                        <button className="btn btn-outline-success">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home
