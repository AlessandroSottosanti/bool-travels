import { useState } from "react";
import { viaggi } from "../data/viaggi.js"
import { useNavigate } from "react-router-dom";
import styles from './travelersPage.module.css'

const TravelersPage = () => {

    // creo lo state che salva il passeggero cliccato per la card
    const [selectTraveler, setSelectTraveler] = useState(null);
    //   funzione che seleziona il passeggero e apre la card al click
    const handlerTravelClick = (traveler) => {
        setSelectTraveler(traveler);
    };

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const tuttiIViaggiatori = viaggi.flatMap((viaggio) => viaggio.viaggiatori);

    const viaggiatoriFiltrati = search
        ? tuttiIViaggiatori.filter((viaggiatore) => viaggiatore.cognome.toLowerCase().includes(search.toLowerCase()))
        : tuttiIViaggiatori;


    return (
        <>
            <div>
            <button className="btn btn-primary " onClick={() => navigate(-1)}>Indietro</button>

                <div className="d-flex justify-content-center mb-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Cerca per cognome"
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                        />

                        <button className="btn btn-primary" onClick={() => setSearch(query)}>Cerca</button>
                    </div>
                </div>

                <h2 className="text-center">nome Viaggio</h2>

                <div className="d-flex justify-content-around ">
                    <div>
                        <ul className="list-unstyled">
                            {viaggiatoriFiltrati.map((curTraveler, index) => (
                                <li key={index}>
                                    <button className={`${styles.buttontravelers}`} onClick={() => handlerTravelClick(curTraveler)}>{curTraveler.nome} {curTraveler.cognome}</button>

                                </li>


                            ))
                            }
                        </ul>
                    </div>

                    <div>
                        {selectTraveler && (
                            <div>
                                <div>{selectTraveler.nome}</div>
                                <div>{selectTraveler.cognome}</div>
                                <div>{selectTraveler.telefono}</div>
                                <div>{selectTraveler.mail}</div>
                            </div>
                        )}
                    </div>
                </div>




            </div>




















        </>
    )


}

export default TravelersPage;