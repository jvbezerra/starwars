import useSWR from 'swr/immutable'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import Avatar, { AvatarSkeleton } from '../Avatar'
import Card from '../Card'

interface Props {
  character: Character
  onClick?: () => void
}

const CharacterCard: React.FC<Props> = ({ character, ...props }) => {
  const {
    data: specie,
    isValidating: loadingSpecie
  } = useSWR<{ name: string }>(character.species[0])

  const {
    data: world,
    isValidating: loadingWorld
  } = useSWR<{ name: string }>(character.homeworld)

  return (
    <Card component="li" elevation={3} {...props}>
      {loadingSpecie
        ? <AvatarSkeleton/>
        : <Avatar specie={specie?.name ?? `Human ${character.gender}`} />
      }
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="button">
          { character?.name }
        </Typography>
        {loadingWorld
          ? <Skeleton />
          : <Typography variant="caption">{ world?.name }</Typography>
        }
      </div>
    </Card>
  )
}

export default CharacterCard