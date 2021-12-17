import auth from '@react-native-firebase/auth'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import * as S from './styled'

type Props = {}

const LoginScreen: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  const onPressSignInAnon = () => {
    auth().signInAnonymously()
  }

  return (
    <S.Container>
      <Button title={t('login.signInAnon')} onPress={onPressSignInAnon} />
    </S.Container>
  )
}

export default LoginScreen
