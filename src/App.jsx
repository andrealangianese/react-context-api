//importo i componenti per la gestione delle rotte

import { BrowserRouter, Routes, Route } from "react-router-dom"

//importo nuove pages 

import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import NavBar from "./components/NavBar"
import DetailProducts from "./pages/DetailProducts"
import PageNotFound from "./pages/PageNotFound"

//importo il provider del contesto per renderlo disponibile a tutta l'app
import { BudgetProvider } from "./contexts/BudgetContext"

function App() {

  return (
    <>

      <h1>eccoti</h1>
      {/* tutti i componenti dentro a budget provider hanno accesso al budget */}
      <BudgetProvider>
        <BrowserRouter>
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

