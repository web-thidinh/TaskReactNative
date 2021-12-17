import React, { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import { Switch, StyleSheet, Platform } from 'react-native'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  label: string
  value: boolean
  onChange: () => void
}

const isAndroid = Platform.OS === 'android'

const SwitchButton: FunctionComponent<Props> = ({ label, value, onChange }) => {
  const theme = useTheme()

  return (
    <S.Container>
      <T.ButtonText2 bold>{label}</T.ButtonText2>

      <Switch
        trackColor={{ false: theme.colors.third_black, true: theme.colors.primary_black }}
        thumbColor={theme.colors.white}
        style={isAndroid ? styles.switchAndroid : styles.switchIOS}
        ios_backgroundColor={theme.colors.third_black}
        onChange={onChange}
        value={value}
      />
    </S.Container>
  )
}

const styles = StyleSheet.create({
  switchIOS: { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginRight: -4 },
  switchAndroid: {},
})

export default SwitchButton
