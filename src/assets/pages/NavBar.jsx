import { Link, NavLink } from "react-router-dom";

export default function NavBar() {

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

                    {links.map(link => (
                        <li key={link.id}>
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