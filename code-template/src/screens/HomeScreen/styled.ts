import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[0.5]}px;
`

export const Grid = styled.View`
  flex-direction: row;
  margin: 10px 0;
`

export const Row = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
