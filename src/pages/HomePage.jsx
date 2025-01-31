import React, { useState } from "react";
import { viaggi } from "../data/viaggi.js";

const HomePage = () => {
    const [viaggioSelezionato, setViaggioSelezionato] = useState(null);

    return (
        <div>
            {!viaggioSelezionato ? (
                <div className="container d-flex flex-column gap-5 my-5">
                    <h1>Lista Viaggi</h1>

                    {viaggi.map((viaggio, index) => (
                        <div key={index} className="card p-3 d-flex">
                            <h3>{viaggio.destinazione}</h3>
                            <p>Partenza: {viaggio.dataPartenza}</p>
                            <p>Ritorno: {viaggio.dataRitorno}</p>
                            <p>Guide: {viaggio.guide.join(", ")}</p>
                            <button className="btn btn-primary" onClick={() => setViaggioSelezionato(viaggio)}>
                                Vedi Dettagli
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <button onClick={() => setViaggioSelezionato(null)}>Torna Indietro</button>
                    <h2>{viaggioSelezionato.destinazione}</h2>
                    <p>Partenza: {viaggioSelezionato.dataPartenza}</p>
                    <p>Ritorno: {viaggioSelezionato.dataRitorno}</p>
                    <p>Guide: {viaggioSelezionato.guide.join(", ")}</p>
                    <h3>Lista Viaggiatori</h3>
                    <ul>
                        {viaggioSelezionato.viaggiatori.map((viaggiatore, index) => (
                            <li key={index}>
                                {viaggiatore.nome} {viaggiatore.cognome} - {viaggiatore.mail} - {viaggiatore.telefono}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomePage;
