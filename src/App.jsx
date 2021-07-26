import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ShopContextComponent } from './Context/ShopContext'
import { CartContextComponent } from './Context/CartContext'
import { Header } from './Components/Header'
import { ItemListContainer } from './Containers/ItemListContainer'
import { ItemDetailContainer } from './Containers/ItemDetailContainer'
import { Cart } from './Components/Cart'
import { Footer } from './Components/Footer'

const App = () => { 
    return (
      <ShopContextComponent>
      <CartContextComponent>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:categoryId" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Cart}/>
          </Switch> 
          <Footer /> 
        </BrowserRouter>
      </CartContextComponent>
      </ShopContextComponent>   
  )
}

export default App;
