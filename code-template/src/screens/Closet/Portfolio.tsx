import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {}

const Closet: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return <S.Container></S.Container>
}

export default Closet
