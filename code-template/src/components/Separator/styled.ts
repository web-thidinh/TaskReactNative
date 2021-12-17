import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.colors.third_color};
`
