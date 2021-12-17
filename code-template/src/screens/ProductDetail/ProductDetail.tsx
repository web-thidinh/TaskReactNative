import React, { Fragment, FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRoute } from '@react-navigation/native'
import Spacer from 'react-styled-spacer'
import { useTheme } from 'styled-components'
import * as T from '../../theme/typography'
import * as S from './styled'

import Container from '../../components/Container'
import MoreProduct from '../../components/MoreProduct'
import Padding from '../../components/Padding'
import Separator from '../../components/Separator'
import DropdownButton from '../../components/DropdownButton'
import ProductSize from '../../components/ProductSize'
import ProductDetailMaterial from '../../components/ProductDetailMaterial'
import SizeGuide from '../../components/SizeGuide'

import useProductDetail from '../../hooks/useProductDetail'

type Props = {}

const ProductDetail: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const route = useRoute()
  const theme = useTheme()
  const { colors } = theme
  const [isDetailsDropdownOpening, setDetailsDropdownOpening] = useState(true)
  const [isSizeGuideDropdownOpening, setSizeGuideDropdownOpening] = useState(true)

  const toggleDetailsDropdown = () => setDetailsDropdownOpening(current => !current)

  const toggleSizeGuideDropdown = () => setSizeGuideDropdownOpening(current => !current)

  const id = route.params['id']

  const { product } = useProductDetail(id)

  const productDetail = product?.attributes

  const renderMaterials = useMemo(() => {
    if (!isDetailsDropdownOpening) return null
    return (
      <Fragment>
        <Padding l={2} r={3.5}>
          <ProductDetailMaterial
            label={t('global.color')}
            value={productDetail?.colorDescription}
          />
        </Padding>
        <Separator height={1} />
        <Padding l={2} r={3.5}>
          <ProductDetailMaterial label={t('product.material')} value={productDetail?.material} />
        </Padding>
        <Separator height={1} />
        <Padding l={2} r={3.5}>
          <ProductDetailMaterial label={t('product.fit')} value={productDetail?.fit} />
        </Padding>
        <Separator height={1} />
      </Fragment>
    )
  }, [productDetail, isDetailsDropdownOpening])

  const renderSizeGuide = useMemo(() => {
    if (!isSizeGuideDropdownOpening) return null
    const sizes = productDetail?.variants?.data?.map(({ attributes }) => attributes)
    return (
      <Fragment>
        <Padding l={2} r={3.5} t={2} b={4}>
          <SizeGuide sizes={sizes} />
        </Padding>
        <Separator height={1} />
      </Fragment>
    )
  }, [isSizeGuideDropdownOpening])

  const renderInformation = useMemo(() => {
    const sizes =
      productDetail.variants?.data?.map(
        ({ attributes }) => attributes?.size?.data?.attributes?.name
      ) || []
    return (
      <Fragment>
        <Padding v={2.5} h={2}>
          <T.Text1Bold color={colors.third_color} numberOfLines={1}>
            {productDetail?.brand?.data?.attributes?.name}
          </T.Text1Bold>
          <Spacer h={12} />
          <T.Header2 color={colors.second_black}>{productDetail?.name?.toUpperCase()}</T.Header2>
          <Spacer h={12} />
          <ProductSize sizes={sizes} font="medium" />
          <Spacer h={42} />
          <T.Text1 color={colors.stoke}>{productDetail?.description}</T.Text1>
          <Spacer h={30} />
        </Padding>
        <Separator height={1} />
      </Fragment>
    )
  }, [productDetail])

  const renderSimilarProducts = useMemo(() => {
    const productCategoryIds = productDetail?.productCategories?.data?.map(({ id }) => id) || []
    return (
      <Padding v={4}>
        <Padding all={2}>
          <T.Header2>{t('product.similarProductions')}</T.Header2>
        </Padding>
        <MoreProduct tag="category" ids={productCategoryIds} />
      </Padding>
    )
  }, [productDetail])

  const renderMoreProductsFromCurrentBrand = useMemo(() => {
    return (
      <Padding v={4}>
        <Padding all={2}>
          <T.Header2>
            {t('product.modeForm')} {productDetail?.brand?.data?.attributes?.name}
          </T.Header2>
        </Padding>
        <MoreProduct tag="brand" ids={['1']} />
      </Padding>
    )
  }, [productDetail])

  return (
    <Container>
      <S.Cover
        source={{ uri: productDetail?.mainImage?.data?.attributes?.url }}
        resizeMode="cover"
      />
      {renderInformation}

      <Padding h={2}>
        <DropdownButton
          label={t('product.productDetails')}
          initState="open"
          onPress={toggleDetailsDropdown}
        />
      </Padding>
      <Separator height={1} />
      {renderMaterials}

      <Padding h={2}>
        <DropdownButton
          label={t('product.sizeGuide')}
          initState="open"
          onPress={toggleSizeGuideDropdown}
        />
      </Padding>
      <Separator height={1} />
      {renderSizeGuide}

      {renderSimilarProducts}
      <Separator height={1} />

      {renderMoreProductsFromCurrentBrand}
    </Container>
  )
}

export default ProductDetail
