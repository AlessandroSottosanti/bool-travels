import { useState } from "react";
import { viaggi } from "../data/viaggi.js"
const TravelersPage = () => {

    // creo lo state che salva il passeggero cliccato per la card
    const [selectTraveler, setSelectTraveler] = useState(null);
    //   funzione che seleziona il passeggero e apre la card al click
    const handlerTravelClick = (traveler) => {
        setSelectTraveler(selectTraveler === traveler);
    };


    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const tuttiIViaggiatori = viaggi.flatMap((viaggio) => viaggio.viaggiatori);

    const viaggiatoriFiltrati = search
        ? tuttiIViaggiatori.filter((viaggiatore) => viaggiatore.cognome.toLowerCase().includes(search.toLowerCase()))
        : tuttiIViaggiatori;
















    return (
        <>
            <div>

                <div>
                    <input
                        type="text"
                        placeholder="Cerca per cognome"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />

                    <button className="btn btn-primary" onClick={() => setSearch(query)}>Cerca</button>
                </div>

                <h2>nome Viaggio</h2>

                <ul>{viaggiatoriFiltrati.map((curTraveler, index) => (
                    <li key={index}>

                        <button onClick={() => handlerTravelClick(curTraveler)}>{curTraveler.nome} {curTraveler.cognome}</button>


                    </li>
                    //    card layout


                ))

                }</ul>



                <div>
                    <div>{selectTraveler.mail}</div>
                    <div>{selectTraveler.telefono}</div>
                </div>




            </div>




















        </>
    )


}

export default TravelersPage;