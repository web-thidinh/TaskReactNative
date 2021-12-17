import React, { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native-gesture-handler'
import Product from '../../components/Product'
import CatalogueHeader from '../../components/Headers/Catalogue'
import Categories from '../../components/Categories'
import useProducts from '../../hooks/useProducts'

import * as S from './styled'
import Separator from '../../components/Separator'

type Props = {}

const categories = ['ALL', 'TOP', 'BOTTOM', 'HOODIE', 'T-SHIRT', 'COAT', 'SWEATER']

const CatalogueScreen: FunctionComponent<Props> = () => {
  const { products } = useProducts()
  const renderItem = ({ item: product }) => {
    const { attributes, id } = product
    const { name, mainImage, subscriptionType, variants } = attributes
    const image = mainImage?.data?.attributes?.url
    const color = subscriptionType?.data?.attributes?.name
    const sizes =
      variants?.data.map(({ attributes }) => attributes?.size?.data?.attributes?.name) || []

    return <Product id={id} brand={name} color={color} sizes={sizes} image={image} />
  }

  return (
    <S.Container>
      <CatalogueHeader />
      <Categories options={categories} />
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.table}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        numColumns={2}
        ItemSeparatorComponent={() => <Separator height={1} />}
      />
    </S.Container>
  )
}

const styles = StyleSheet.create({
  table: {
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
})

export default CatalogueScreen
