import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import useSWR from 'swr/immutable'
import Avatar, { AvatarSkeleton } from '../Avatar'
import Modal from '../Modal'

interface Props {
  isOpen: boolean,
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
`

const CharacterModal: React.FC<Props> = ({ isOpen, onClose, character }) => {
  const {
    data: specie,
    isValidating: loadingSpecie
  } = useSWR<{ name: string }>(character.species[0])

  const {
    data: films,
    isValidating: loadingFilms
  } = useSWR<{ title: string }[]>(character.films)

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container>
        {loadingSpecie
          ? <AvatarSkeleton/>
          : <Avatar specie={specie?.name ?? `Human ${character.gender}`} />
        }

        <Typography variant="h6">
          { character?.name }
        </Typography>

        {detailsEntries.map(([label, key]) => (
          <div key={key} style={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
            <Typography variant="button">{ label }:</Typography>
            <Typography variant="caption">{ character[key] }</Typography>
          </div>
        ))}
        
        <div style={{ display: 'flex' }}>
          <Typography variant="button" paddingRight="10px">
            Films:
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {loadingFilms
              ? <Skeleton variant="rectangular" />
              : films?.map(({ title }, key) => <Typography key={key} variant="caption">{ title }</Typography>)
            }
          </div>
        </div>
      </Container>
    </Modal>
  )
}

export default CharacterModal