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
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="bodyHome">
        <div className="container my-5">
            <Link to="/FormTravelPage" className="genericButton">+ Aggiungi un nuovo viaggio</Link>

            <div>
                <h1 className="mb-4 titleSection">Lista Viaggi</h1>
                <div className="row ">
                    {viaggi && viaggi.map((viaggio) => ( viaggio.inCorso ? (
                        <div key={viaggio.id} className="col-md-4 mb-4">
                            <div className="card shadow ">
                                <div className="card-header">
                                    <h3 className="titleCard">{viaggio.destinazione}</h3>
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

                                    {/* <div>{viaggio.inCorso? (<p>Evento in corso</p>) : (<p>Evento scaduto</p>) }</div> */}
                                    <Link to={`travelers/${viaggio.slug}`} className="buttonDettails" onClick={() => setViaggioSelezionato(viaggio)}>
                                        Vedi Dettagli
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ):
                    (<></>)
                    ))}
                </div>
            </div>

        </div>
        </section>
    );
};

export default HomePage;
