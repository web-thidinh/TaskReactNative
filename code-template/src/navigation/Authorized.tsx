import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import TabNavigation from './TabNavigation'
import ProductDetail from '../screens/ProductDetail'

import { ScreenRoute } from './routes'

type Props = {}

const Stack = createStackNavigator()

export const Authorized: FunctionComponent<Props> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      initialRouteName={ScreenRoute.TAB_BAR}
    >
      <Stack.Screen name={ScreenRoute.PRODUCT_DETAIL} component={ProductDetail} />

      <Stack.Screen name={ScreenRoute.TAB_BAR} component={TabNavigation} />
    </Stack.Navigator>
  )
}

export default Authorized
