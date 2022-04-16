import styled from '@emotion/styled'
import CharacterCard from '../CharacterCard'

interface Props {
  characters?: any[]
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
        <CharacterCard key={key} character={character}/>
      ))}
    </List>
  )
}

export default CharacterList