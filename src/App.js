import React, { useEffect } from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/Reducer";
import Footer from "./components/Footer";
import Menu from './components/Menu';
import Aboutus from './components/Aboutus'
import ContactUs from './components/ContactUs'
import Footer2 from "./components/Footer2";
import Cities from "./components/Cities";


const App = () => {

  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async()=>{
    await getAllFoodItems().then(data=>{
      
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    })
  }

  useEffect(()=>{fetchData()}, [])

  // console.log(foodItems);



  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 md:mt-20 md: px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<Menu items = {foodItems}/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
        </main>
        <Cities/>
        <Footer2/>
      </div>
    </AnimatePresence>
  );
};

export default App;
