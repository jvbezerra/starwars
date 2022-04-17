import styled from '@emotion/styled'
import CharacterCard from '../CharacterCard'
import { CardSkeleton } from '../Card'

interface Props {
  characters: Character[] | undefined
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

const CharacterList: React.FC<Props> = ({ characters = [...new Array(10)] }) => {
  return (
    <List>
      {characters.map((character, key) => (
        !character ? <CardSkeleton /> :
        <CharacterCard key={key} character={character}/>
      ))}
    </List>
  )
}

export default CharacterList