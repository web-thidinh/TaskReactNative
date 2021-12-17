import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import LoginScreen from '../screens/LoginScreen'
import { ScreenRoute } from './routes'

type Props = {}

const Stack = createStackNavigator()

export const Unauthorized: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: true,
      }}
      initialRouteName={ScreenRoute.LOGIN}
    >
      <Stack.Screen
        name={ScreenRoute.LOGIN}
        options={{
          title: t('navigation.login'),
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default Unauthorized
