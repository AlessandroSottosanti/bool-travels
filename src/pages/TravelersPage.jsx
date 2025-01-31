import { useState } from "react";
import viaggi from "../data/viaggi"
const TravelersPage = () => {
// // Creo lo state per settare la lista in base al viaggio cliccato nella pagina home
// const [travelers, setTravelers] = useState([]);

// // creo la chiamata in entrata per prendere i dati, sarà attiva quando si avrà un back
// const getTravelers = () => {
    
// }

const viaggio = viaggi[0]; 

const [search, Setsearch] = useState("");
const viaggiatoriFiltrati = viaggi
.flatMap((viaggio) => viaggio.viaggiatori)
.filter((viaggiatore) => viaggiatore.cognome.toLowerCase().includes(search.toLowerCase()));
















return(
    <>
    <div>
          <h2>nome Viaggio</h2>
          {viaggio.ma
            
          }
  





    </div>



















    
    </>
)


}

export default TravelersPage;