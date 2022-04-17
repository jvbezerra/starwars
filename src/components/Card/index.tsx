import MuiPaper, { PaperProps } from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material/styles'

export const CardSkeleton = () => (
  <Skeleton
    animation="wave"
    variant="rectangular"
    width="100%"
  >
    <div style={{ width: '283px', height: '131px' }} />
  </Skeleton>
)

const Card = styled(MuiPaper)<PaperProps & { component: string }>({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer'
})

export default Card