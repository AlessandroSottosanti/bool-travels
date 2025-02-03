import { useState } from "react";

const FormTravelersPage = () => {
    const defaultFormData = {
        nome: "",
        cognome: "",
        codiceFiscale: "",
        mail: "",
        telefono: ""
    }
    
    const [travelers, setTravelers] = useState(defaultFormData);

    const viaggioData = location.state?.viaggioData || {};
    return (
        <>
        
        </>
    )
}

export default FormTravelersPage