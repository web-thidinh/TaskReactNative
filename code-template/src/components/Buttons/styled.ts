import styled, { css } from 'styled-components/native'
import { CenteredTouchableOpacity } from './../../theme/styled'

export const Button1 = styled(CenteredTouchableOpacity)`
  padding: ${({ theme }) => theme.spacing[0.5]}px ${({ theme }) => theme.spacing[1.5]}px;
  border-radius: ${({ radius, theme }) =>
    radius === 'square' ? theme.border_radius.small : theme.border_radius.large}px;
  min-width: 37px;

  ${({ autoHeight }) =>
    autoHeight
      ? css`
          height: auto;
        `
      : css`
          height: 37px;
        `}

  ${({ autoWidth }) =>
    autoWidth
      ? css`
          width: auto;
        `
      : css`
          width: 126px;
        `}
`
export const Primary = styled(Button1)`
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary_black};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary_black};
  border-width: 1px;
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary_black};
`

export const Secondary = styled(Button1)`
  border-width: 1px;
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary_black};
`

export const Cancel = styled.TouchableOpacity``

export const Select = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const Image = styled.Image`
  width: 14.4px;
  height: 6px;
  margin-left: 10px;
`

export const Block = styled(Button1)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled : theme.colors.primary_black};
  width: 100%;
  border-radius: ${({ theme }) => theme.border_radius.small}px;
`

export const Color = styled(Button1)`
  background-color: ${({ color }) => color};
  width: 42px;
  border-radius: ${({ theme }) => theme.border_radius.small}px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
`
