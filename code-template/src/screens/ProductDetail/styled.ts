import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Cover = styled.Image`
  width: 100%;
  height: ${({ theme }) => theme.screen_width.width * 1.1}px;
  background-color: ${({ theme }) => theme.colors.disabled};
`
