import styled from '@emotion/styled'
import CharacterCard from '../CharacterCard'
import { CardSkeleton } from '../Card'
import { memo } from 'react'

interface Props {
  characters: Character[] | undefined,
  onSelect: (name: string) => void
}

const List = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 5px;
  margin: unset;
`

const CharacterList: React.FC<Props> = ({ characters = [...new Array(10)], onSelect }) => {
  return (
    <List>
      {characters.map((character, key) => (
        !character ? <CardSkeleton /> :
        <CharacterCard
          key={key}
          character={character}
          onClick={() => onSelect(character.name)}
        />
      ))}
    </List>
  )
}

export default memo(CharacterList)