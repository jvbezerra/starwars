import MuiPagination from '@mui/material/Pagination'
import { styled } from '@mui/material/styles'
import { memo } from 'react'

const Pagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;
  width: 100%
`

export default memo(Pagination)