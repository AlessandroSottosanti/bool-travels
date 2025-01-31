import React, { useState } from "react";
import { viaggi } from "../data/viaggi.js";

const HomePage = () => {
    const [viaggioSelezionato, setViaggioSelezionato] = useState(null);

    return (
        <div className="container my-5">
            {!viaggioSelezionato ? (
                <div>
                    <h1 className="mb-4">Lista Viaggi</h1>
                    <div className="row">
                        {viaggi.map((viaggio, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card shadow ">
                                    <div className="card-header">
                                    <h3 className="card-title">{viaggio.destinazione}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text"><strong>Partenza:</strong> {viaggio.dataPartenza}</p>
                                        <p className="card-text"><strong>Ritorno:</strong> {viaggio.dataRitorno}</p>
                                        <p className="card-text"><strong>Guide:</strong> {viaggio.guide.join(", ")}</p>
                                        <button className="btn btn-primary mt-2 w-100" onClick={() => setViaggioSelezionato(viaggio)}>
                                            Vedi Dettagli
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <button className="btn btn-danger mb-3" onClick={() => setViaggioSelezionato(null)}>
                        Torna Indietro
                    </button>
                    <div className="card shadow p-4">
                        <div className="card-body">
                            <h2 className="card-title">{viaggioSelezionato.destinazione}</h2>
                            <p className="card-text"><strong>Partenza:</strong> {viaggioSelezionato.dataPartenza}</p>
                            <p className="card-text"><strong>Ritorno:</strong> {viaggioSelezionato.dataRitorno}</p>
                            <p className="card-text"><strong>Guide:</strong> {viaggioSelezionato.guide.join(", ")}</p>
                            <h3 className="mt-3">Lista Viaggiatori</h3>
                            <ul className="list-group">
                                {viaggioSelezionato.viaggiatori.map((viaggiatore, index) => (
                                    <li key={index} className="list-group-item">
                                        {viaggiatore.nome} {viaggiatore.cognome} - {viaggiatore.mail} - {viaggiatore.telefono}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
