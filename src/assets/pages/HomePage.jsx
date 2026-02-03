import { Link } from "react-router-dom"

function HomePage() {

    return (
        <>
            <h3>Ciao bello, vieni a comprare!</h3>
            <button><Link to="/our-products">Vai ai prodotti</Link></button>
            <img src="https://c8.alamy.com/compit/2fxaf4k/foto-di-simpatica-simpatica-giovane-donna-divertente-faccia-funky-lingua-grimace-fuori-isolato-su-sfondo-di-colore-rosa-2fxaf4k.jpg" alt="" />
        </>
    )
}

export default HomePage
