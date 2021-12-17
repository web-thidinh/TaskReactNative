import React, { FunctionComponent, useMemo } from 'react'
import Spacer from 'react-styled-spacer'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import Separator from '../Separator'
import { useTranslation } from 'react-i18next'
import { ScreenRoute } from '../../navigation/routes'
import * as T from '../../theme/typography'
import * as S from './styled'
import ProductSize from '../ProductSize'

type Props = {
  id: string
  sizes?: string[]
  image?: any
  brand: string
  color: string
}

const Product: FunctionComponent<Props> = ({ id, sizes = [], image, brand = '', color = '' }) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigation = useNavigation()

  const handleNavigateToProductDetail = () => {
    navigation.navigate(ScreenRoute.PRODUCT_DETAIL, { id })
  }

  return (
    <S.Container onPress={handleNavigateToProductDetail} activeOpacity={1}>
      <S.ImageWrapper>
        <S.Image source={{ uri: image }} resizeMode="cover" />

        <S.BookmarkImage
          source={require('../../assets/images/bookmark-outline.png')}
          resizeMode="cover"
        />
      </S.ImageWrapper>

      <S.Content>
        <Spacer h={6} />
        <T.CardTitle1Bold color={theme.colors.second_black} numberOfLines={1}>
          {brand.toUpperCase()}
        </T.CardTitle1Bold>
        <Spacer h={6} />
        <ProductSize sizes={sizes} />
        <Spacer h={6} />
        <Separator height={1} />
        <Spacer h={10} />

        <S.Grid>
          <T.CardTitle1 color={theme.colors.second_black}>{t('catalogue.valore')}</T.CardTitle1>
          <T.CardTitle1Bold color={theme.colors.second_black} bold>
            {color.toUpperCase()}
          </T.CardTitle1Bold>
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}

export default Product
