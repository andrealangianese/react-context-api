import { createContext, useContext, useState } from "react";

//importo axios per eventuali chiamate future
import axios from "axios";

//creo var globale inizialmente vuota

const BudgetContext = createContext();

const endpoint = "https://fakestoreapi.com/products"

//budgetprovider componente wrapper e children = tutti i componenti figli
function BudgetProvider({ children }) {


    //var d stato per i prodotti
    const [prodotti, setProdotti] = useState([])

    // stato budget mode (booleano)
    const [budgetMode, setBudgetMode] = useState(false);
    
    //funzione con axios per recuperare i dati

    function getProducts() {
        axios.get(endpoint)
            .then((resp) => setProdotti(resp.data))
            .catch((err) => console.log(err))
    }


    

    return (
        <BudgetContext.Provider
            // value contiene i dati e le funzioni che vuoi rendere globali
            value={{
                // in qusto caso il valore booleano del budget mode e la funzione per aggiornarlo
                budgetMode,
                setBudgetMode
            }}>
            {children}
        </BudgetContext.Provider>
    );
}

// hook personalizzato
function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudget };
