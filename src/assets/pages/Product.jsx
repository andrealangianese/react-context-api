import { useState, useEffect } from "react"
import axios from "axios"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"

function Products() {

    const endpoint = "https://fakestoreapi.com/products"

    //var d stato per i prodotti
    const [prodotti, setProdotti] = useState([])

    //funzione con axios per recuperare i dati

    function getProducts() {
        axios.get(endpoint)
            .then((resp) => setProdotti(resp.data))
    }

    //stampo solo al caricamento della pagina

    useEffect(getProducts, [])
    return (
        <>
        <NavBar />
            <h3>i nostri prodotti</h3>
            <div className="prod-page">
                {prodotti.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.image} alt={prod.title} width="100" />
                        <Link to={`/our-products/${prod.id}`}>Dettagliatamente</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products