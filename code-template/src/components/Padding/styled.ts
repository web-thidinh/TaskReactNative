import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  ${({ t, r, b, l, v, h, all }) => {
    if (t || r || b || l)
      return css`
        padding: ${t}px ${r}px ${b}px ${l}px;
      `
    if (v || h)
      return css`
        padding: ${v}px ${h}px;
      `
    return css`
      padding: ${all}px;
    `
  }}
`
