import styled from 'styled-components/native'
import { SpaceBetweenGrid } from '../../theme/styled'

export const Container = styled.View`
  height: ${({ theme }) => theme.screen_width.height * 0.67}px;
  border-top-left-radius: ${({ theme }) => theme.border_radius.xlarge}px;
  border-top-right-radius: ${({ theme }) => theme.border_radius.xlarge}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px 35px 0 35px;
`

export const Content = styled.View`
  flex: 1;
`

export const Item = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing[2] * 0.67}px 0;
`

export const PriceWrapper = styled.View`
  flex: 2;
`

export const DescriptionWrapper = styled.View`
  flex: 4.5;
`

export const RadioWrapper = styled.View`
  flex: 1.5;
  align-items: flex-end;
`

export const RadioBorder = styled.View`
  width: 26px;
  height: 26px;
  border-radius: ${({ theme }) => theme.border_radius.medium}px;
  padding: ${({ theme }) => theme.spacing[0.5]}px;
  border: 1px solid ${({ theme }) => theme.colors.primary_black};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
`

export const Radio = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary_black};
`

export const Grid = styled(SpaceBetweenGrid)`
  bottom: ${({ theme }) => theme.spacing[2.5]}px;
  position: absolute;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing[2]}px;
`

export const Button = styled.TouchableOpacity``
