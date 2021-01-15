import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters}) {

  const showCharacters = () => characters.map(character => <CharacterCard character={character} />)
  return (
    <ul className="character-list">
      {showCharacters()}
    </ul>
  )
}
