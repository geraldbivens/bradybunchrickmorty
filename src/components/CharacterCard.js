import React from 'react'

export default function CharacterCard({character}) {
  return (
    <li className="character-card">
      <img src={character.image} alt={character.name}/>
    </li>
  )
}
