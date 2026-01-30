import { useParams, Link, useNavigate } from "react-router-dom"

// imp axios per chiamata

import axios from "axios"

import { useEffect, useState } from "react"

//endpoint per aggiungere i dettagli

const endpointNew = "https://fakestoreapi.com/products"

export default function DetailProducts() {

    const { id } = useParams()
    
    //dichiaro navigate per tornare indietro, prima di usarlo

    const navigate = useNavigate();
    //nuova var d stato per i dettagli

    const [dettagli, setDettagli] = useState({})

    //effettuo la chiamata per i dettagli

    useEffect(() => {
        axios.get(`${endpointNew}/${id}`)
            .then((resp) => setDettagli(resp.data))
            .catch((err) => {
                console.log(err)
                navigate("/our-products")
            })

    }, [])



    return (
        <div className="detail-card">
            <h3>Dettagli prodotto {id}</h3>
            <h4>{dettagli.title}</h4>
            <img src={dettagli.image} alt={dettagli.title} width="150" />
            <p>Prezzo: {dettagli.price} $</p>
            <p>Descrizione: {dettagli.description}</p>
            <p>Categoria: {dettagli.category}</p>
            <Link to="/our-products">Torna ai prodotti</Link>
        </div>)
}