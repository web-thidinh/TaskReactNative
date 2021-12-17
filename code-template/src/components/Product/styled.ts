import styled from 'styled-components/native'
import { SpaceBetweenGrid } from '../../theme/styled'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.screen_width.width / 2 - 2}px;
`

export const ImageWrapper = styled.View`
  position: relative;
`

export const Image = styled.Image`
  width: 100%;
  height: ${({ theme }) => (theme.screen_width.width / 2 - 2) * 1.22}px;
  background-color: ${({ theme }) => theme.colors.disabled};
`

export const BookmarkImage = styled.Image`
  width: ${({ theme }) => theme.icon_size.small}px;
  height: ${({ theme }) => theme.icon_size.small}px;
  position: absolute;
  top: 14px;
  right: 14px;
`

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing[1.5]}px ${({ theme }) => theme.spacing[2]}px;
`
export const Grid = styled(SpaceBetweenGrid)``
