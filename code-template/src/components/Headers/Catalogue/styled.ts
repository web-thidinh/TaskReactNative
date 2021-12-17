import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[2]}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
