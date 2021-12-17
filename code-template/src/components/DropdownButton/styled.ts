import styled from 'styled-components/native'
import { SpaceBetweenTouchableOpacity } from '../../theme/styled'

export const Container = styled(SpaceBetweenTouchableOpacity)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]}px 0;
`

export const ClosedImage = styled.Image`
  width: 6px;
  height: 14.4px;
  margin-right: 12px;
`
export const OpenedImage = styled.Image`
  width: 14.4px;
  height: 6px;
  margin-right: 10px;
`
