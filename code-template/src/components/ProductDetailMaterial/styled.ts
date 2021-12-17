import styled from 'styled-components/native'
import { SpaceBetweenTouchableOpacity } from '../../theme/styled'

export const Container = styled(SpaceBetweenTouchableOpacity)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]}px 0;
`
