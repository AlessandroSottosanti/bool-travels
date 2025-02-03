import { useState } from "react";

const FormTravelersPage = () => {
    const defaultFormData = {
        nome: "",
        cognome: "",
        codiceFiscale: "",
        mail: "",
        telefono: "",
        dataDiNascita: "",
    }

    const [travelers, setTravelers] = useState([{...defaultFormData}]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newTravelers = [...travelers];
        newTravelers[index][name] = value;
        setTravelers(newTravelers);
    }

    const handleAddTraveler = () => {
        setTravelers([...travelers, { ...defaultFormData }]);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault;
    }

    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">Aggiungi un viaggiatore</h2>
                <form onSubmit={handleFormSubmit}>
                    {travelers.map((curTraveler, index) => (
                        <div key={index} className="form-group">
                            <div className="form-group mb-3">
                                <label htmlFor="nome">Nome del viaggiatore</label>
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Inserisci il nome del viaggiatore" value={curTraveler.nome}  onChange={(event) => handleInputChange(index, event)} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="cognome">Cognome del viaggiatore</label>
                                <input type="text" className="form-control" id="cognome" name="cognome" placeholder="Inserisci il cognome del viaggiatore" value={curTraveler.cognome} onChange={(event) => handleInputChange(index, event)}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="dataDiNascita">Data di nascita del viaggiatore</label>
                                <input type="date" className="form-control" id="dataDiNascita" name="dataDiNascita" value={curTraveler.dataDiNascita} onChange={(event) => handleInputChange(index, event)}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="codiceFiscale">Codice fiscale del viaggiatore</label>
                                <input type="text" className="form-control" id="codiceFiscale" name="codiceFiscale" placeholder="Inserisci il codice fiscale del viaggiatore" value={curTraveler.codiceFiscale} onChange={(event) => handleInputChange(index, event)}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="mail">Mail del viaggiatore</label>
                                <input type="text" className="form-control" id="mail" name="mail" placeholder="Inserisci l'indirizzo e-mail del viaggiatore" value={curTraveler.mail} onChange={(event) => handleInputChange(index, event)}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="telefono">Telefono del viaggiatore</label>
                                <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Inserisci il numero di telefono del viaggiatore" value={curTraveler.telefono} onChange={(event) => handleInputChange(index, event)}/>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn btn-primary mb-3" onClick={handleAddTraveler}>
                        Aggiungi Viaggiatore
                    </button>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormTravelersPage