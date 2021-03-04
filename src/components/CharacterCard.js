import React from 'react'

export default function CharacterCard({character, deleteCharacter}) {
  
  const handleClick = (event) => {
    deleteCharacter(character)
  }
  
  return (
    <li className="character-card">
      <img src={character.image} alt={character.name}/>
      <button className="delete" onClick={handleClick}>Delete</button>
    </li>
  )
}
