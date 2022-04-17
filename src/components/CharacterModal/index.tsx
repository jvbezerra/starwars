import styled from '@emotion/styled'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import useSWR from 'swr/immutable'
import Avatar, { AvatarSkeleton } from '../Avatar'
import Modal from '../Modal'

interface Props {
  onClose: () => void,
  character: Character
}

const detailsEntries = [
  ['Gender', 'gender'],
  ['Hair Color', 'hair_color'],
  ['Eye Color', 'eye_color'],
  ['Height', 'height'],
  ['Mass', 'mass'],
  ['Skin Color', 'skin_color'],
  ['Birth Year', 'birth_year'],
]

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 75%;
`

const CharacterModal: React.FC<Props> = ({ character, onClose }) => {
  const {
    data: specie,
    isValidating: loadingSpecie
  } = useSWR<{ name: string }>(character.species[0])

  const { data: films } = useSWR<{ title: string }[]>(character.films)

  return (
    <Modal open={true} onClose={onClose}>
      <Container>
        {loadingSpecie
          ? <AvatarSkeleton/>
          : <Avatar specie={specie?.name ?? `Human ${character.gender}`} />
        }

        <Typography variant="h6">
          { character?.name }
        </Typography>

        {detailsEntries.map(([label, key]) => (
          <Section key={key}>
            <Typography variant="button">{ label }:</Typography>
            <Typography variant="caption">{ character[key] }</Typography>
          </Section>
        ))}
        
        <Section>
          <Typography variant="button" paddingRight="10px">
            Films:
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {films && films?.length > 0
              ? films?.map(({ title }, key) => (
                <Typography key={key} variant="caption">
                  { title }
                </Typography>
              ))
              : <Skeleton width="100px" variant="rectangular" />
            }
          </div>
        </Section>
      </Container>
    </Modal>
  )
}

export default CharacterModal