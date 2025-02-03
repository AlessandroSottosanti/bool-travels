import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const HomePage = () => {
    const [viaggioSelezionato, setViaggioSelezionato] = useState(null);
    const [viaggi, setViaggi] = useState([]);

    useEffect(() => {
        getViaggi();
    }, []);

    const getViaggi = () => {
        axios.get(`${apiUrl}/travels`)
            .then((resp) => {
                setViaggi(resp.data.data)
            });
    }

    return (
        <div className="container my-5">

            <div>
                <h1 className="mb-4">Lista Viaggi</h1>
                <div className="row ">
                    {viaggi && viaggi.map((viaggio, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card shadow ">
                                <div className="card-header">
                                    <h3 className="card-title">{viaggio.destinazione}</h3>
                                </div>
                                <div className="card-body">

                                    <p className="card-text">
                                        <strong>Partenza:</strong> {new Date(viaggio.dataPartenza).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" })}
                                    </p>

                                    <p className="card-text">
                                        <strong>Ritorno:</strong> {new Date(viaggio.dataRitorno).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" })}
                                    </p>

                                    <p className="card-text"><strong>Guide:</strong>
                                        {viaggio.guide.map(guida => ` ${guida.nome} ${guida.cognome}`).join(", ")}
                                    </p>
                                    <Link to={`travelers/${viaggio.slug}`} className="btn btn-primary mt-2 w-100" onClick={() => setViaggioSelezionato(viaggio)}>
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
