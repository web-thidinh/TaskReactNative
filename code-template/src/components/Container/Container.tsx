import React, { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import * as S from './styled'

type Props = {}

const Container: FunctionComponent<Props> = ({ children }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles(colors).safeArea} edges={['bottom']}>
      <S.Container>
        <S.Content>{children}</S.Content>
        <S.Button top={insets.top} activeOpacity={1} onPress={handleGoBack}>
          <S.Image source={require('../../assets/images/back-button.png')} resizeMode="contain" />
        </S.Button>
      </S.Container>
    </SafeAreaView>
  )
}

const styles = colors =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.white,
    },
  })

export default Container
