// Clone of the React State-Props based estore e-commerce app - Redux Implementing (Making state centralized)
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DataAPI from './pages/DataAPI';
import AddProductToAPI from './pages/AddProductToAPI';
import RestfulAPIData from './pages/RestfulAPIData';
import ErrorPage from "./pages/ErrorPage";
import { CartItemsData, totaPriceOfCartItemsData } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResult from './pages/SearchResult';

class App extends Component {
  state = {
    //Preventing duplication product to cart
    itemsIDsStorage: [],
    cartItemsTotalNum: 0,
    //fetching cart items from the CartItemsData fro data.js and putting in state.
    cartItems: CartItemsData,
    //Data in state for the checkout page. Total Cost of the items in cart to checkout page.
    totalPriceCartItems: totaPriceOfCartItemsData,
  }

  handleAddItemCart = (item) => {
    // console.log("Test which item is passed to cart :", item.id);
    // console.log("Ids storgae :", this.state.itemsIDsStorage);
    let itemsIDsStorage = this.state.itemsIDsStorage;
    if (!itemsIDsStorage.includes(item.id)) {
      CartItemsData.push(item);
      this.setState({ cartItems: CartItemsData });
      //Preventing duplication product to be added in cart - based on state itemsIDsStorage (keeps ids for the products)
      itemsIDsStorage.push(item.id);
      this.setState({ itemsIDsStorage })
      let cartItemsTotalNum = this.state.cartItemsTotalNum;
      cartItemsTotalNum++;
      this.setState({ cartItemsTotalNum });
      //Showing Toast Message - when product added to cart 
      toast.success('Product added to Cart', {
        position: toast.POSITION.TOP_LEFT
      });
    } else {
      //Showing Toast Up Message - when user tries to add produt again.
      toast.error('Product already in Cart', {
        position: toast.POSITION.TOP_LEFT
      });
    }
  };

  //Product Quantity and total price of the particular product
  onhandleAddQuantity = (id) => {
    //Updating the quanity in the state for the product
    const increment = ++CartItemsData[id].quantity;
    this.setState({ increment });
    //Updating the price per quantity in the state for the product
    let priceQuantityShow = (CartItemsData[id].priceQuantity +=
      CartItemsData[id].price);
    this.setState({ priceQuantityShow });
    // Updating navbar cart total quantity
    let cartItemsTotalNum = this.state.cartItemsTotalNum;
    cartItemsTotalNum++;
    // Preventing Cart total count to be negative
    if (cartItemsTotalNum < 0) {
      cartItemsTotalNum = 0;
    }
    this.setState({ cartItemsTotalNum })
  };

  //Decrease quantity of the product in the cart
  onhandleRemoveQuantity = (id) => {
    // Controlling quantity to go below 1
    if (CartItemsData[id].quantity > 1) {
      const decrement = --CartItemsData[id].quantity;
      this.setState({ decrement });
      //Updating the price per quantity in the state for the product
      let priceQuantityShow = (CartItemsData[id].priceQuantity -=
        CartItemsData[id].price);
      this.setState({ priceQuantityShow });
      // Updating navbar cart total quantity
      let cartItemsTotalNum = this.state.cartItemsTotalNum;
      cartItemsTotalNum--;
      // Preventing Cart total count to be negative
      if (cartItemsTotalNum < 0) {
        cartItemsTotalNum = 0;
      }
      this.setState({ cartItemsTotalNum })
    }
  };

  // Deleteing products in the cart
  onhandleDeleteProduct = (itemid, itemquantity) => {
    var deleteItemsInCart = this.state.cartItems;
    deleteItemsInCart = this.state.cartItems.filter(function (deleteItemsInCart) {
      return deleteItemsInCart.id !== itemid;
    });
    // Deleting all ojects in CartItemsData in data.js and pushing the filtered objects/items to CartItemsData data.js
    const start = 0;
    const end = CartItemsData.length;
    CartItemsData.splice(start, end);
    deleteItemsInCart.filter(function (DataCartItemPush) {
      CartItemsData.push(DataCartItemPush);
      return DataCartItemPush.id !== "nothing";
    });
    this.setState({ cartItems: deleteItemsInCart });
    // Updating navbar cart total quantity - fetching from CartItem.jsx as parameter
    let cartItemsTotalNum = this.state.cartItemsTotalNum;
    cartItemsTotalNum = cartItemsTotalNum - itemquantity;
    // Preventing Cart total count to be negative
    if (cartItemsTotalNum < 0) {
      cartItemsTotalNum = 0;
    }
    this.setState({ cartItemsTotalNum })
    //Deleting IDs from itemsIDsStorage Array in state so User can add product again to cart.
    let itemsIDsStorage = this.state.itemsIDsStorage;
    let index = itemsIDsStorage.indexOf(itemid);
    itemsIDsStorage[index] = 99999;
    this.setState({ itemsIDsStorage });
  };

  render() {
    return (
      <Router>
        <Navbar ItemsInCart={this.state.cartItemsTotalNum} />
        <Routes>
          <Route path="/" element={<Home addItemCart={this.handleAddItemCart} />} />
          {/* Same link for github pages */}
          <Route path="/React-Project-e-commerce-app-estore.com/" element={<Home addItemCart={this.handleAddItemCart} />} />
          <Route path="/React-Project-e-commerce-app-estore.com/productlist/:category" element={<ProductList addItemCart={this.handleAddItemCart} />} />
          <Route path="/React-Project-e-commerce-app-estore.com/productview/:id" element={<ProductView addItemCart={this.handleAddItemCart} />} />
          <Route path="/React-Project-e-commerce-app-estore.com/register" element={<Register />} />
          <Route path="/React-Project-e-commerce-app-estore.com/signin" element={<SignIn />} />
          <Route path="/React-Project-e-commerce-app-estore.com/cart" element={<Cart
            AddQuantity={this.onhandleAddQuantity}
            RemoveQuantity={this.onhandleRemoveQuantity}
            DeleteProduct={this.onhandleDeleteProduct}
            cartItems={this.state.cartItems}
          />} />
          <Route path="/React-Project-e-commerce-app-estore.com/checkout" element={<Checkout
            totalCartItems={this.state.cartItemsTotalNum}
            totalPriceCartItems={this.state.totalPriceCartItems}
          />} />
          <Route path="/React-Project-e-commerce-app-estore.com/dataapi" element={<DataAPI />} />
          <Route path="/React-Project-e-commerce-app-estore.com/addproducttoapi" element={<AddProductToAPI />} />
          <Route path="/React-Project-e-commerce-app-estore.com/restfulapi" element={<RestfulAPIData />} />
          <Route path="/React-Project-e-commerce-app-estore.com/searchresult/:keyword" element={<SearchResult />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    );
  }
}

export default App;