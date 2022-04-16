import { Paper, Skeleton } from '@mui/material'

interface Props {
  character: any
}

const CharacterSkeleton = () => (
  <Skeleton
    animation="wave"
    variant="rectangular"
    width="100%"
  >
    <div style={{ paddingTop: '25%' }} />
  </Skeleton>
)

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <>
      {!character ? <CharacterSkeleton/> :
        <Paper component="li" elevation={3}>
          <p>:D</p>
          <p>:D</p>
          <p>:D</p>
        </Paper>
      }
    </>
  )
}

export default CharacterCard