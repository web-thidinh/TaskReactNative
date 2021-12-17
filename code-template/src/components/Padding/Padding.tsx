import React, { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'

import * as S from './styled'

type Props = {
  t?: number
  b?: number
  l?: number
  r?: number

  v?: number
  h?: number

  all?: number
}

const Padding: FunctionComponent<Props> = ({
  t = 0,
  b = 0,
  l = 0,
  r = 0,
  v = 0,
  h = 0,
  all = 0,
  children,
}) => {
  const theme = useTheme()

  const top = theme.spacing[t]
  const right = theme.spacing[r]
  const bottom = theme.spacing[b]
  const left = theme.spacing[l]

  const vertical = theme.spacing[v]
  const horizontal = theme.spacing[h]

  const _all = theme.spacing[all]
  return (
    <S.Container t={top} b={bottom} l={left} r={right} v={vertical} h={horizontal} all={_all}>
      {children}
    </S.Container>
  )
}

export default Padding
