import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import Cart from './page/Cart'
import ProductDetails from './page/ProductDetails'
import Payment from './page/Payment'
import MyAccount from './page/MyAccount'
import EditAdd from './page/EditAdd'
import MyOrder from './page/MyOrder'
import { ConText } from './context/DataContext'
import Register from './page/Register'
import Login from './page/Login'
import Success from './page/Success'
import PayNow from './page/PayNow'
import AdminKonter from './page/AdminKonter'
import DaftarHp from './page/admin/DaftarHp'
import DataHp from './page/admin/DataHp'
import NilaiHp from './page/admin/NilaiHp'


import './App.css'
import TmbDaftarHp from './page/admin/TmbDaftarHp'
import TmbDataHp from './page/admin/TmbDataHp'
import TmbNilaiHp from './page/admin/TmbNilaiHp'



const App = () => {
  return (
    <>
    <ConText>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route exact  path="/tmbdaftarhp" component={TmbDaftarHp} />
      <Route exact  path="/tmbdatahp" component={TmbDataHp} />
      <Route exact  path="/tmbnilaihp" component={TmbNilaiHp} />
      <Route exact  path="/products" component={Products} />
      <Route exact  path="/adminkonter" component={AdminKonter} />
      <Route exact  path="/daftarhp" component={DaftarHp} />
      <Route exact  path="/datahp" component={DataHp} />
      <Route exact  path="/nilaihp" component={NilaiHp} />
      <Route exact  path="/cart" component={Cart} />
      <Route exact  path="/details/:id" component={ProductDetails} />
      <Route exact  path="/payment" component={Payment} />
      <Route exact path="/myaccount" component={MyAccount} />
      <Route exact path="/edit_address/:id" component={EditAdd}/>
      <Route exact path="/myorder/:id" component={MyOrder}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/paynow/:pid" component={PayNow}/>
    </Switch>
   
    </BrowserRouter>
    </ConText>

    

      
    </>
  )
}

export default App
