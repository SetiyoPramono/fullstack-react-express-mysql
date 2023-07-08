import '../App.css'
// import { DataContext } from '../context/DataContext'
import Navbar from '../component/Navbar'
import DataSemuaHp from '../component/admin/DataSemuaHp'

const Home = () => {

    
    return (
        <>
        <Navbar/>
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 mb-3 mx-auto">
                    <h1>Semalamat Datang di <span>Konter HP Termurah</span> </h1>
                    <p>Kami melayani semua jenis hp dan semua kebutuhan hp anda untuk kedepannya</p>
                        <button className="btn btn-outline-success">Selengkapnya</button>

                    </div>
                    <div className="col-md-6 col-12 mb-3 mx-auto">
                        <img src="../img/one.svg" alt="home " className="img-fluid main-img" />
                        
                        </div>
                </div>
            </div>
        </div><br/><br/>
            <DataSemuaHp/>
            <div className="desc mt-1">
                <div className="container-fluid"> 
                    <div className="row">
                <div className="col-md-6 col-12 mx-auto mb-3 ">
                    <img src="../img/envv.svg" alt="ok" className="img-fluid side-img" />
                </div>
                    <div className=" col-md-6 col-12 mx-auto mb-3 d-flex justify-content-center align-items-center flex-column">
                    <h1>Semalamat Datang di <span>Konter HP Termurah</span> </h1>
                    <p>Kami melayani semua jenis hp dan semua kebutuhan hp anda untuk kedepannya</p>
                        <button className="btn btn-outline-success">Selengkapnya</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home
