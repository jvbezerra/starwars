import { Skeleton, Typography } from '@mui/material'
import axios from 'axios'
import useSWR from 'swr/immutable'
import Avatar, { AvatarSkeleton } from '../Avatar'
import Card from '../Card'

interface Props {
  character: Character
}

const fetch = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const { data: specie, isValidating: loadingSpecie } = useSWR<{ name: string }>(character.species[0], fetch)
  const { data: world, isValidating: loadingWorld } = useSWR<{ name: string }>(character.homeworld, fetch)

  return (
    <Card component="li" elevation={3}>
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