import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

        const dataToSend = new FormData();
        for (let key in viaggioData) {
            if (key === "guide") {
                dataToSend.append(key, JSON.stringify(viaggioData[key]));
            } else {
                dataToSend.append(key, viaggioData[key]);
            }
        }

        navigate("/formtravelerspage", { state: { viaggioData } });
    };


    return (
        <>
            <div className="container my-4">
                <button onClick={() => navigate(-1)}>Indietro</button>

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
                    <div class="form-group mb-3">
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