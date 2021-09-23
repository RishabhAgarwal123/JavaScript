import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';
import { Home, AboutPage, CartPage, CheckoutPage, ErrorPage, PrivateRoute, ProductsPage, SingleProductPage } from './pages';

function App() {
  return <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/products:id" children={<SingleProductPage />}>
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
    <Footer />
  </Router>
}

export default App
