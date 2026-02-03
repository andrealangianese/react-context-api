//importo i componenti per la gestione delle rotte

import { BrowserRouter, Routes, Route } from "react-router-dom"

//importo nuove pages 

import HomePage from "./assets/pages/HomePage"
import AboutUs from "./assets/pages/AboutUs"
import Products from "./assets/pages/Product"
import NavBar from "./assets/pages/NavBar"
import DetailProducts from "./assets/pages/DetailProducts"
import PageNotFound from "./assets/pages/PageNotFound"

import { BudgetProvider } from "./contexts/BudgetContext"

function App() {

  return (
    <>
    <BudgetProvider>
      <BrowserRouter>
        <h1>eccoti</h1>
        {/* navbar sempre visibile */}
        <NavBar />
        <Routes>
          {/* in questo caso mostrerà solo homepage + h1 che effettivamente è gia presente */}
          <Route path="/" element={<HomePage />} />
          <Route path="/su-di-noi" element={<AboutUs />} />
          <Route path="/our-products">
            <Route index element={<Products />} />
            <Route path=":id" element={<DetailProducts />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App

