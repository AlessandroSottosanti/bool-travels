import React, { useState } from "react";
import { viaggi } from "../data/viaggi.js";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [viaggioSelezionato, setViaggioSelezionato] = useState(null);

    return (
        <div className="container my-5">
            
                <div>
                    <h1 className="mb-4">Lista Viaggi</h1>
                    <div className="row ">
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
                                        <Link to={`/travelers/${viaggio.id}`} className="btn btn-primary mt-2 w-100" onClick={() => setViaggioSelezionato(viaggio)}>
                                            Vedi Dettagli
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
        </div>
    );
};

export default HomePage;
