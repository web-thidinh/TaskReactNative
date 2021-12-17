import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
