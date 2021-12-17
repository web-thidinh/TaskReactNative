import styled from 'styled-components/native'
import Fonts from '../../theme/fonts'

export const Container = styled.View`
  width: 100%;
  margin: 4px 0;
`

export const Field = styled.TextInput`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.third_color};
  padding: 0 ${({ theme }) => theme.spacing[1.5]}px;
  border-radius: ${({ theme }) => theme.border_radius.xsmall}px;
  font-size: ${({ theme }) => theme.font_size.smedium}px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
`
