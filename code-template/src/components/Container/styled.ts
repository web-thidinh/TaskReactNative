import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  position: relative;
`

export const Content = styled.ScrollView`
  flex: 1;
  position: relative;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme, top }) => theme.spacing[2] + top}px;
  padding: ${({ theme }) => theme.spacing[2]}px;
  left: ${({ theme }) => theme.spacing[2]}px;
`

export const Image = styled.Image`
  width: ${({ theme }) => theme.icon_size.smedium}px;
  height: ${({ theme }) => theme.icon_size.smedium}px;
`
