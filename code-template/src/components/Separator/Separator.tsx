import React, { FunctionComponent } from 'react'
import * as S from './styled'

type Props = {
  height?: number
}

const Separator: FunctionComponent<Props> = ({ height = 2 }) => {
  return <S.Container height={height} />
}

export default Separator
