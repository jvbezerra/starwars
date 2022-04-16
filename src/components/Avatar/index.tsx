import CustomAvatar from 'avataaars'
import Skeleton from '@mui/material/Skeleton'
import { specieToAvatar } from '../../lib/speciesAvatarsMap'

export const AvatarSkeleton = () => (
  <Skeleton variant="circular">
    <div style={{ padding: '30px 40px' }}>.</div>
  </Skeleton>
)

const Avatar: React.FC<{ specie: string, style?: React.CSSProperties }> = ({ specie, style }) => {
  return (
    <CustomAvatar
      style={{ width: '40%', height: '80%', ...style }}
      {...(specieToAvatar[specie] ?? specieToAvatar['Droid'])}
    />
  )
}

export default Avatar