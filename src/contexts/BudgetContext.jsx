import { createContext, useContext, useState } from "react";

//creo var globale inizialmente vuota

const BudgetContext = createContext();

//budgetprovider componente wrapper e children = tutti i componenti figli
function BudgetProvider({ children }) {


    // stato budget mode (booleano)
    const [budgetMode, setBudgetMode] = useState(false);

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
