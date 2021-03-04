import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters, deleteCharacter}) {

  const showCharacters = () => characters.map(character => {
    return <CharacterCard deleteCharacter={deleteCharacter} character={character} />
  })
  return (
    <ul className="character-list">
      {showCharacters()}
    </ul>
  )
}
