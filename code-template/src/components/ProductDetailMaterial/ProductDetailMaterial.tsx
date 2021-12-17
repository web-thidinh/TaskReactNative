import React, { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import * as S from './styled'
import * as T from '../../theme/typography'

type Props = {
  label: string
  value: string
}

const ProductDetailMaterial: FunctionComponent<Props> = ({ label, value }) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <S.Container>
      <T.Text2 color={colors.second_black}>{label}</T.Text2>
      <T.Text2 color={colors.third_color}>{value}</T.Text2>
    </S.Container>
  )
}

export default ProductDetailMaterial
