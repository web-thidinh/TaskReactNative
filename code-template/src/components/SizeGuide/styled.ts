import styled from 'styled-components/native'
import { CenteredGrid } from '../../theme/styled'

export const Container = styled.View`
  width: 100%;
`
export const CGrid = styled(CenteredGrid)``

export const ItemWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing[1]}px;
`
