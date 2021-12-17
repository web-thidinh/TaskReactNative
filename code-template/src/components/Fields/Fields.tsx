import React, { FunctionComponent } from 'react'
import Spacer from 'react-styled-spacer'
import * as S from './styled'
import * as T from '../../theme/typography'

type Props = {
  label: string
  placeholder: string
}

const Fields: FunctionComponent<Props> = ({ label, placeholder }) => {
  return (
    <S.Container>
      <T.Text2>{label}</T.Text2>
      <Spacer h={6} />
      <S.Field placeholder={placeholder} />
    </S.Container>
  )
}

export default Fields
