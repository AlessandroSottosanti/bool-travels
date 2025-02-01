import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './travelersPage.module.css';
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const TravelersPage = () => {
    const { slug } = useParams();

    const [viaggiatori, setViaggiatori] = useState([]);
    const [selectTraveler, setSelectTraveler] = useState(null);  // stato per il passeggero selezionato
    const [search, setSearch] = useState("");  // stato per la ricerca
    const [query, setQuery] = useState("");  // stato per il valore di input della ricerca

    const navigate = useNavigate();

    useEffect(() => {
        getViaggiatori();
    }, [search]);

    // useEffect(() => {

    // }, [query]);
    // funzione che seleziona il passeggero e apre la card al click
    const handlerTravelClick = (traveler) => {
        setSelectTraveler(traveler);
    };

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            getViaggiatori();
        }
    };
    
    // funzione per ottenere i viaggiatori
    const getViaggiatori = () => {
        axios.get(`${apiUrl}/travels/travelers/${slug}`, { params: { search } })
            .then((resp) => {
                setViaggiatori(resp.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div>
                <button className={`${styles.buttonBack}`} onClick={() => navigate(-1)}>Indietro</button>

                <div className="d-flex justify-content-center mb-4">
                    <div>
                        <input
                            type="search"
                            placeholder="Cerca per cognome"
                            name="search"
                            value={query}
                            onKeyUp={(event) => handleEnterKey(event)}
                            onChange={event => setQuery(event.target.value)}
                        />

                        <button
                            className={`${styles.buttonBack}`}
                            onClick={() => {
                                setSearch(query); // aggiorna il valore di search con il valore dell'input
                                getViaggiatori();  // chiama la funzione per ottenere i viaggiatori
                            }}
                        >
                            Cerca
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-around ">
                    <div>
                        <ul className="list-unstyled">
                            {viaggiatori && viaggiatori.map((curTraveler, index) => (
                                <li key={index}>
                                    <button className={`${styles.buttontravelers}`} onClick={() => handlerTravelClick(curTraveler)}>
                                        {curTraveler.nome} {curTraveler.cognome}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {selectTraveler && (
                            <div className={`${styles.containerCard}`}>
                                <div className={`${styles.titleCard}`}>
                                    {selectTraveler.nome} {selectTraveler.cognome}
                                </div>
                                <div className={`${styles.dettailsCard}`}>
                                    Numero di telefono: {selectTraveler.telefono}
                                </div>
                                <div className={`${styles.dettailsCard}`}>
                                    email: {selectTraveler.mail}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelersPage;
