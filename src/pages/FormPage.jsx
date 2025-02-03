import { useState } from "react";

function FormPage() {
    const DefaultFormData = {
        destinazione: "",
        partenza: "",
        ritorno: "",
        guida: {
            nome: "",
            cognome: ""
        }
    }

    const [viaggioData, setViaggioData] = useState(DefaultFormData);

    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        const newViaggioData = { ...viaggioData, [fieldName]: value }
        setViaggioData(newViaggioData);
    }

    const handleFormSubmit = (event) => {
        event.PreventDefault();
        const dataToSend = new FormData();

        for (let key in viaggioData) {
            dataToSend.append(key, viaggioData[key])
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <h2 className="text-center">Aggiungi un viaggio</h2>
                    <div class="form-group mb-3">
                        <label htmlFor="destinazione">Destinazione</label>
                        <input type="text" class="form-control" id="destinazione" name="destinazione" placeholder="Scegli la destinazione del viaggio" onChange={handleInputChange} />
                    </div>
                    <div class="form-group mb-3">
                        <label htmlFor="partenza">Data di partenza</label>
                        <input type="date" class="form-control" id="partenza" name="partenza" onChange={handleInputChange} />
                    </div>
                    <div class="form-group mb-3">
                        <label htmlFor="ritorno">Data di ritorno</label>
                        <input type="date" class="form-control" id="ritorno" name="ritorno" onChange={handleInputChange} />
                    </div>
                    <div class="form-group mb-3">
                        <label htmlFor="guide">Guide</label>
                        <input type="text" class="form-control" id="guide" placeholder="Scegli i nomi delle guide" name="guida" onChange={handleInputChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormPage