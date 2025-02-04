import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function FormTravelPage() {
    const DefaultFormData = {
        destinazione: "",
        dataPartenza: "",
        dataRitorno: "",
        guide: []
    };

    const [formData, setFormData] = useState(DefaultFormData);
    const [nomeGuida, setNomeGuida] = useState("");
    const [cognomeGuida, setCognomeGuida] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddGuide = () => {
        if (nomeGuida.trim() && cognomeGuida.trim()) {
            const newGuide = { nome: nomeGuida.trim(), cognome: cognomeGuida.trim() };
            setFormData((prevData) => ({
                ...prevData,
                guide: [...prevData.guide, newGuide]
            }));
            setNomeGuida("");
            setCognomeGuida("");
        } else {
            alert("Inserisci sia il nome che il cognome della guida.");
        }
    };

    const handleRemoveGuide = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            guide: prevData.guide.filter((_, i) => i !== index)
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!formData.destinazione || !formData.dataPartenza || !formData.dataRitorno) {
            alert("Compila tutti i campi obbligatori.");
            return;
        }

        if (formData.guide.length === 0) {
            alert("Devi inserire almeno una guida.");
            return;
        }

        // **Dati formattati esattamente come il BE si aspetta**
        const viaggioToSend = {
            destinazione: formData.destinazione,
            dataPartenza: formData.dataPartenza,
            dataRitorno: formData.dataRitorno,
            guide: formData.guide // Passiamo l'array delle guide direttamente
        };

        console.log("Dati inviati:", viaggioToSend); // Debug

        axios.post(`${apiUrl}/travels`, viaggioToSend, {
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            console.log("Viaggio creato con successo:", response.data);
            setFormData(DefaultFormData);
            navigate(`/formtravelerspage/${response.data.slug}`, { state: { setFormData: response.data } });
        })
        .catch(error => {
            console.error("Errore durante l'invio dei dati:", error.response?.data || error.message);
            alert("Errore durante l'invio del viaggio. Riprova più tardi.");
        });
    };

    return (
        <div className="container my-4">
            <Link className="genericButton" to={`/`}>Indietro</Link>

            <form onSubmit={handleFormSubmit}>
                <h2 className="text-center">Aggiungi un viaggio</h2>

                <div className="form-group mb-3">
                    <label htmlFor="destinazione">Destinazione</label>
                    <input type="text" className="form-control" id="destinazione" name="destinazione" placeholder="Scegli la destinazione del viaggio" value={formData.destinazione} onChange={handleInputChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="partenza">Data di partenza</label>
                    <input type="date" className="form-control" id="partenza" name="dataPartenza" value={formData.dataPartenza} onChange={handleInputChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="ritorno">Data di ritorno</label>
                    <input type="date" className="form-control" id="ritorno" name="dataRitorno" value={formData.dataRitorno} onChange={handleInputChange} required />
                </div>

                {/* Sezione Guide */}
                <div className="form-group mb-3">
                    <label>Guide</label>
                    <div className="d-flex gap-2">
                        <input type="text" className="form-control" placeholder="Nome della guida" value={nomeGuida} onChange={(e) => setNomeGuida(e.target.value)} />
                        <input type="text" className="form-control" placeholder="Cognome della guida" value={cognomeGuida} onChange={(e) => setCognomeGuida(e.target.value)} />
                        <button type="button" className="guideButton" onClick={handleAddGuide}>Aggiungi</button>
                    </div>
                </div>

                {/* Lista Guide Inserite */}
                {formData.guide.length > 0 && (
                    <div className="mb-3">
                        <h5>Guide inserite:</h5>
                        <ul className="list-group">
                            {formData.guide.map((guida, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {guida.nome} {guida.cognome}
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveGuide(index)}>Rimuovi</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button type="submit" className="genericButton">Salva Viaggio</button>
            </form>
        </div>
    );
}

export default FormTravelPage;
