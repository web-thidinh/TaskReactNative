import React, { FunctionComponent, useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import Spacer from 'react-styled-spacer'
import { useTheme } from 'styled-components'
import Product from '../Product'
import useSimilarProduct from '../../hooks/useSimilarProduct'
import useBrandProduct from '../../hooks/useBrandProduct'

import * as S from './styled'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux'

type Props = {
  ids: string[]
  tag: 'category' | 'brand'
}

const MoreProduct: FunctionComponent<Props> = ({ tag, ids }) => {
  const { similarProducts } = useSimilarProduct()
  const { brandProducts } = useBrandProduct()
  const theme = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    if (ids.length) {
      if (tag === 'brand') {
        dispatch(actions.requests.product.fetchBrandProducts(ids))
      }
      if (tag === 'category') {
        dispatch(actions.requests.product.fetchSimilarProducts(ids))
      }
    }
  }, [tag, ids])

  const renderItem = ({ item: product }) => {
    const { attributes, id } = product
    const { name, mainImage, subscriptionType, variants } = attributes
    const image = mainImage?.data?.attributes?.url
    const color = subscriptionType?.data?.attributes?.name
    const sizes =
      variants?.data.map(({ attributes }) => attributes?.size?.data?.attributes?.name) || []

    return <Product id={id} brand={name} color={color} sizes={sizes} image={image} />
  }

  const data = () => {
    switch (tag) {
      case 'category':
        return similarProducts
      case 'brand':
        return brandProducts
      default:
        return []
    }
  }

  const products = data()

  return (
    <S.Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={() => <Spacer w={theme.spacing[2]} />}
        ListFooterComponent={() => <Spacer w={theme.spacing[2]} />}
        ItemSeparatorComponent={() => <Spacer w={10} />}
      />
    </S.Container>
  )
}

export default MoreProduct
