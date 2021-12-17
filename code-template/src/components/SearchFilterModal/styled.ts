import styled, { css } from 'styled-components/native'
import {
  VerticalCenteredGrid,
  SpaceBetweenGrid,
  SpaceBetweenTouchableOpacity,
} from '../../theme/styled'

export const Container = styled.View`
  height: ${({ theme, statusBarHeight }) => theme.screen_width.height - statusBarHeight}px;
  border-top-left-radius: ${({ theme }) => theme.border_radius.xlarge}px;
  border-top-right-radius: ${({ theme }) => theme.border_radius.xlarge}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 35px 0 35px;
`

export const Content = styled.View`
  flex: 1;
`

export const VGrid = styled(VerticalCenteredGrid)`
  flex-wrap: wrap;
`

export const VWrapGrid = styled(VerticalCenteredGrid)`
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.spacing[1]}px;
`

export const ItemWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing[1]}px;
`

export const SGrid = styled(SpaceBetweenGrid)`
  bottom: ${({ theme }) => theme.spacing[2.5]}px;
  position: absolute;
  width: 100%;
`

export const Button = styled.TouchableOpacity``

export const ItemsWrapper = styled.View`
  bottom: ${({ theme }) => theme.spacing[2.5] + 52}px;
  position: absolute;
`

export const Image = styled.Image`
  width: 30px;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
`

export const Dropdown = styled.View`
  padding: ${({ theme }) => theme.spacing[2]}px 0;
`
