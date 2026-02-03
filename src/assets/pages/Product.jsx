import { useState, useEffect } from "react"
import axios from "axios"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"

// importo hook creato nel context
import { useBudget } from "../../contexts/BudgetContext"
function Products() {

    const endpoint = "https://fakestoreapi.com/products"

    const [prodotti, setProdotti] = useState([])
    const [loading, setLoading] = useState(true)
    const { budgetMode } = useBudget()
    

    function getProducts() {
        setLoading(true)
        axios.get(endpoint)
            .then((resp) => setProdotti(resp.data))
            .catch((err) => console.error("Errore getProducts:", err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getProducts()
    }, [])

    let filteredProducts = prodotti;
    if (budgetMode) {
        filteredProducts = prodotti.filter(prod => prod.price < 30);
    }
    
    if (loading) return <p>Caricamento prodotti...</p>

    return (
        <>
            <h3>i nostri prodotti</h3>
            {budgetMode ? (
                <p>Filtrando: prodotti sotto i 30€</p>
            ) : (
                <p>Mostrando tutti i prodotti</p>
            )}
            <div className="prod-page">
                {filteredProducts.length === 0 ? (
                    <p>Nessun prodotto trovato.</p>
                ) : (
                    filteredProducts.map(prod => (
                        <div key={prod.id}>
                            <h3>{prod.title}</h3>
                            <img src={prod.image} alt={prod.title} width="100" />
                            <Link to={`/our-products/${prod.id}`}>scopriamo insieme i dettagli del prodotto selezionato</Link>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Products