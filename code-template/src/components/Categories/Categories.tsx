import React, { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Spacer from 'react-styled-spacer'
import Buttons from '../Buttons'
import Separator from '../Separator'

import * as S from './styled'

type Props = {
  options: string[]
}

const Categories: FunctionComponent<Props> = ({ options }) => {
  const renderItem = ({ item: option, index }) => {
    const isSelected = index === 0
    return (
      <Buttons
        fits={['w', 'h']}
        type={isSelected ? 'primary' : 'secondary'}
        text={option}
        onPress={() => {}}
      />
    )
  }

  return (
    <S.Container>
      <Separator height={1} />
      <FlatList
        contentContainerStyle={styles.table}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={options}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={() => <Spacer w={15} />}
        ItemSeparatorComponent={() => <Spacer w={15} />}
        ListFooterComponent={() => <Spacer w={15} />}
      />
      <Separator height={1} />
    </S.Container>
  )
}

const styles = StyleSheet.create({
  table: {
    alignItems: 'center',
  },
})

export default Categories
