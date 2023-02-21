import Navbar from './Components/navbar'
import Card from './Components/Card'
import Solaire from './images/Solaire_Concept_Art.png' 
import Tarkus from './images/Black_iron_tarkus.webp' 
import Crestfallen from './images/Crestfallen_Warrior.webp' 
import Havel from './images/Havel-the-rock.webp' 
import FireKeeper from './images/firekeeper.jpg' 
import Siegmeyer from './images/siegmeyer_of_catarina.jpg' 
import Sif from './images/sif.jpg' 
import Andre from './images/Andre.webp' 
import { useState } from 'react'

function App() {
  const soulsCharacters = [{imgsrc: Solaire, imgName: "Solaire"}, {imgsrc: Tarkus, imgName: "Tarkus"}, {imgsrc: Crestfallen, imgName: "Crestfallen"}
                            , {imgsrc:Havel, imgName: "Havel"}, {imgsrc: FireKeeper, imgName: "Firekeeper"},
                            {imgsrc:Siegmeyer, imgName:"Siegmeyer"}, {imgsrc: Sif, imgName: "Sif"}, {imgsrc: Andre, imgName: "Andre"}]
  
  // function generateRandomCharacter(){
  //   const random = Math.ceil(Math.random() * 7)
  //   return soulsCharacters[random]
  // }
  const [character, setRandomCharacter] = useState(soulsCharacters[0]);

  function generateRandomCharacter(){
    const random = Math.ceil(Math.random() * 7)
    setRandomCharacter(soulsCharacters[random])
    return soulsCharacters[random]
  }
  function generateCards(){
    return soulsCharacters.map((character, index) => {
      return <Card key={index} className="card" cardID={index} cardURL={character.imgsrc} cardName={character.imgName} randomChar={generateRandomCharacter}/>
    })
  }

  return (
    <div className="App">
      <Navbar />
      {/* <Card cardID={1} cardName="Solaire" cardURL={Solaire}/> */}
      <div className='cards'>
      {generateCards()}
      </div>
    </div>
  );
}

export default App;
