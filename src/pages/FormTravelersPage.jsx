import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;


const FormTravelersPage = () => {
    const defaultFormData = {
        nome: "",
        cognome: "",
        codiceFiscale: "",
        mail: "",
        telefono: "",
        dataDiNascita: "",
    }

    const [travelers, setTravelers] = useState([]);
    const [formData, setFormData] = useState(defaultFormData);
    const {slug} = useParams();

    const navigate = useNavigate();
    // useEffect(() => {

    // }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleAddTraveler = (event) => {
        event.preventDefault();
        console.log("formData:", formData);
        setTravelers([...travelers, { ...formData }]);
        setFormData(defaultFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(travelers);
        console.log(slug);

        const reqBody = {"viaggiatori" : travelers};
        axios.post(`${apiUrl}/travels/travelers/${slug}`, reqBody)
        .then((resp) => {
            console.log(resp);
            setFormData(defaultFormData);
            setTravelers([]);
            navigate(`/`);
        })
        .catch((err) => {
            console.log(reqBody);
            console.log(err);
        });

    }

    const handleRemoveTraveler = (index) => {
        const updatedTravelers = [...travelers];
        updatedTravelers.splice(index, 1);

        setTravelers(updatedTravelers);
    }

    return (
        <>
            <div className="container my-4">
                <h2 className="text-center">Aggiungi un viaggiatore</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <div className="form-group mb-3">
                            <label htmlFor="nome">Nome del viaggiatore</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Inserisci il nome del viaggiatore" value={formData.nome} onChange={handleInputChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="cognome">Cognome del viaggiatore</label>
                            <input type="text" className="form-control" id="cognome" name="cognome" placeholder="Inserisci il cognome del viaggiatore" value={formData.cognome} onChange={handleInputChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="dataDiNascita">Data di nascita del viaggiatore</label>
                            <input type="date" className="form-control" id="dataDiNascita" name="dataDiNascita" value={formData.dataDiNascita} onChange={handleInputChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="codiceFiscale">Codice fiscale del viaggiatore</label>
                            <input type="text" className="form-control" id="codiceFiscale" name="codiceFiscale" placeholder="Inserisci il codice fiscale del viaggiatore" value={formData.codiceFiscale} onChange={handleInputChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="mail">Mail del viaggiatore</label>
                            <input type="text" className="form-control" id="mail" name="mail" placeholder="Inserisci l'indirizzo e-mail del viaggiatore" value={formData.mail} onChange={handleInputChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="telefono">Telefono del viaggiatore</label>
                            <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Inserisci il numero di telefono del viaggiatore" value={formData.telefono} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="container d-flex gap-5 justify-content-between mb-3">
                    <button type="button" className="btn btn-primary " onClick={handleAddTraveler}>
                        + Aggiungi Viaggiatore
                    </button>
                    <button type="submit" className="btn btn-success">Invia lista viaggiatori</button>
                    </div>
                </form>

                {travelers.length > 0 && (
                    <div className="mt-4 overflow-auto">
                        <h3>Viaggiatori già inseriti</h3>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cognome</th>
                                    <th scope="col">Data di Nascita</th>
                                    <th scope="col">Codice Fiscale</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Azioni</th> {/* Colonna per il bottone */}
                                </tr>
                            </thead>
                            <tbody>
                                {travelers.map((curTraveler, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{curTraveler.nome}</td>
                                        <td>{curTraveler.cognome}</td>
                                        <td>{curTraveler.dataDiNascita}</td>
                                        <td>{curTraveler.codiceFiscale}</td>
                                        <td>{curTraveler.mail}</td>
                                        <td>{curTraveler.telefono}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveTraveler(index)}>
                                                Rimuovi
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default FormTravelersPage