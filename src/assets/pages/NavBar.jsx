import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../../contexts/BudgetContext";

export default function NavBar() {
    const { budgetMode, setBudgetMode } = useBudget()
    function handleChangeBudget(){
        setBudgetMode(!budgetMode)
    }
    //generalizzo e raggruppo voci navbar

    const links = [
        { riferimento: "/", descrizioneEvento: "HomePage" },
        { riferimento: "/su-di-noi", descrizioneEvento: "Chi siamoo" },
        { riferimento: "/our-products", descrizioneEvento: "I nostri prodotti " }
    ]
    return (
        <>
            <nav>
                <ul>
                    {/* <li>
                        <NavLink to="/">HomePage </NavLink>
                    </li>
                    <li>
                        <NavLink to="/su-di-noi">Chi siamooooo </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-products">I nostri Prodotti </NavLink>
                    </li> */}
                    <h2>sono la navbar</h2>
                    <button onClick={handleChangeBudget}>{budgetMode ? "Mostra tutti" : "Prodotti sotto i 30€"}</button>
                    {links.map(link => (
                        <li key={link.riferimento}>
                            <NavLink to={link.riferimento}>
                                
                                {link.descrizioneEvento}
                            </NavLink>
                        </li>
                    )
                    )} 
                </ul>
            </nav>
        </>
    )
}