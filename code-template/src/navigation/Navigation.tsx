import { NavigationContainer } from '@react-navigation/native'
import React, { FC, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { CenteredFillView } from 'styled-native-kit'
import useAuthListener from '../hooks/useAuthListener'
import Authorized from './Authorized'
import Unauthorized from './Unauthorized'

const Navigation: FC<{}> = () => {
  const { initialized, firebase } = useAuthListener()

  const renderLoading = firebase.loading || !initialized

  useEffect(() => {
    if (initialized) {
      RNBootSplash.hide({ fade: true })
    }
  }, [initialized])

  if (renderLoading) {
    return (
      <CenteredFillView>
        <ActivityIndicator />
      </CenteredFillView>
    )
  }

  return (
    <NavigationContainer>{firebase.user ? <Authorized /> : <Authorized />}</NavigationContainer>
  )
}

export default Navigation
