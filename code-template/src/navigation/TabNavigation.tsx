import React, { FunctionComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import HomeScreen from '../screens/HomeScreen'
import CatalogueScreen from '../screens/CatalogueScreen'
import Closet from '../screens/Closet'
import Portfolio from '../screens/Portfolio'

import { ScreenRoute } from './routes'

type Props = {}

const Tab = createBottomTabNavigator()

export const TabNavigation: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Tab.Navigator
      initialRouteName={ScreenRoute.CATALOGUE}
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.black },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={ScreenRoute.HOME}
        options={{
          title: t('navigation.home'),
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require('../assets/images/home.png')
                    : require('../assets/images/home-disabled.png')
                }
                resizeMode="contain"
              />
            )
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ScreenRoute.CATALOGUE}
        options={{
          headerShown: false,
          title: t('navigation.catalogue'),
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require('../assets/images/catalogue.png')
                    : require('../assets/images/catalogue-disabled.png')
                }
                resizeMode="contain"
              />
            )
          },
        }}
        component={CatalogueScreen}
      />
      <Tab.Screen
        name={ScreenRoute.CLOSET}
        options={{
          title: t('navigation.closet'),
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require('../assets/images/closet.png')
                    : require('../assets/images/closet-disabled.png')
                }
                resizeMode="contain"
              />
            )
          },
        }}
        component={Closet}
      />
      <Tab.Screen
        name={ScreenRoute.PORTFOLIO}
        options={{
          title: t('navigation.portfolio'),
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={
                  focused
                    ? require('../assets/images/portfolio.png')
                    : require('../assets/images/portfolio-disabled.png')
                }
                resizeMode="contain"
              />
            )
          },
        }}
        component={Portfolio}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
