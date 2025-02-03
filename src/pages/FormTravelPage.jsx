import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function FormTravelPage() {
    const DefaultFormData = {
        destinazione: "",
        dataPartenza: "",
        dataRitorno: "",
        guide: [
            {
                nome: "",
                cognome: ""
            }
        ]
    }

    const [viaggioData, setViaggioData] = useState(DefaultFormData);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "nomeGuida" || name === "cognomeGuida") {
            setViaggioData((prevData) => ({
                ...prevData,
                guide: [{
                    ...prevData.guide[0],
                    [name === "nomeGuida" ? "nome" : "cognome"]: value
                }]
            }));
        } else {
            setViaggioData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Creazione dell'oggetto da inviare
        const viaggioToSend = {
            ...viaggioData,
            guide: viaggioData.guide // Converti l'array guide in stringa
        };

        console.log("Dati inviati:", viaggioToSend); // Debug

        // Effettua la chiamata POST con then/catch
        axios.post(`${apiUrl}/travels`, viaggioToSend, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log("Viaggio creato con successo:", response.data);
            setViaggioData(DefaultFormData);
            const slug = response.data.slug;
            navigate(`/formtravelerspage/${slug}`, { state: { viaggioData: response.data } });
        })
        .catch((error , response) => {
            console.error("Errore durante l'invio dei dati:", error.response?.data || error.message);
            alert("Errore durante l'invio del viaggio. Riprova più tardi.");
        });
    };


    return (
        <>
            <div className="container my-4">
                <Link className="btn btn-primary" to={`/`}>Indietro</Link>

                <form onSubmit={handleFormSubmit}>
                    <h2 className="text-center">Aggiungi un viaggio</h2>
                    <div className="form-group mb-3">
                        <label htmlFor="destinazione">Destinazione</label>
                        <input type="text" className="form-control" id="destinazione" name="destinazione" placeholder="Scegli la destinazione del viaggio" onChange={handleInputChange} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="partenza">Data di partenza</label>
                        <input type="date" className="form-control" id="partenza" name="dataPartenza" onChange={handleInputChange} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="ritorno">Data di ritorno</label>
                        <input type="date" className="form-control" id="ritorno" name="dataRitorno" onChange={handleInputChange} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="guide">Guide</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="nomeGuida"
                            placeholder="Nome della guida"
                            name="nomeGuida"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="cognomeGuida"
                            placeholder="Cognome della guida"
                            name="cognomeGuida"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormTravelPage