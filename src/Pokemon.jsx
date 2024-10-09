import pokemonImg from "./assets/16.svg"

const Pokemon = ({x, y}) => {

    const pokemonStyling = {
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transition: "0.3s"
    }

  return (
   <img 
   style={pokemonStyling}
   width="50"
   height="50"
   src={pokemonImg} 
   alt="Pokemon" />
  )
}

export default Pokemon