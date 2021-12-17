import React, { FunctionComponent, ReactElement } from 'react'
import { useTheme } from 'styled-components'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  text?: string
  disabled?: boolean
  activated?: boolean
  color?: boolean
  fits?: string[]
  radius?: 'circle' | 'square'
  size?: 'medium' | 'big'
  border?: number
  type: 'primary' | 'secondary' | 'cancel' | 'third' | 'select' | 'block' | 'color'
  onPress: Function
}

const getButtonComponent = (props: Props): ReactElement => {
  const {
    text,
    disabled = false,
    activated = false,
    onPress,
    fits = [],
    color,
    size = 'medium',
    radius = 'circle',
    type = 'primary',
  } = props
  const theme = useTheme()

  const buttons: Record<string, ReactElement> = {
    primary: (
      <S.Primary
        size={size}
        activeOpacity={0.8}
        autoWidth={fits.includes('w')}
        autoHeight={fits.includes('h')}
        radius={radius}
        disabled={disabled}
        onPress={onPress}
      >
        {size === 'medium' ? (
          <T.Text2 adjustsFontSizeToFit color={theme.colors.white}>
            {text}
          </T.Text2>
        ) : (
          <T.ButtonText2 adjustsFontSizeToFit color={theme.colors.white}>
            {text}
          </T.ButtonText2>
        )}
      </S.Primary>
    ),
    secondary: (
      <S.Secondary
        activeOpacity={0.8}
        autoWidth={fits.includes('w')}
        autoHeight={fits.includes('h')}
        radius={radius}
        disabled={disabled}
        onPress={onPress}
      >
        {size === 'medium' ? (
          <T.Text2
            adjustsFontSizeToFit
            color={disabled ? theme.colors.disabled : theme.colors.primary_black}
          >
            {text}
          </T.Text2>
        ) : (
          <T.ButtonText2
            adjustsFontSizeToFit
            color={disabled ? theme.colors.disabled : theme.colors.primary_black}
          >
            {text}
          </T.ButtonText2>
        )}
      </S.Secondary>
    ),
    cancel: (
      <S.Cancel disabled={disabled} onPress={onPress}>
        {size === 'medium' ? (
          <T.ButtonText2 color={disabled ? theme.colors.disabled : theme.colors.primary_black}>
            {text}
          </T.ButtonText2>
        ) : (
          <T.Header2Medium color={disabled ? theme.colors.disabled : theme.colors.primary_black}>
            {text}
          </T.Header2Medium>
        )}
      </S.Cancel>
    ),
    select: (
      <S.Select disabled={disabled} onPress={() => onPress()}>
        <T.Header2Medium color={disabled ? theme.colors.disabled : theme.colors.primary_black}>
          {text}
        </T.Header2Medium>
        <S.Image source={require('../../assets/images/arrow-down.png')} resizeMode="contain" />
      </S.Select>
    ),
    third: (
      <S.Cancel onPress={onPress}>
        <T.ButtonText2>
          {activated && '• '}
          {text}
        </T.ButtonText2>
      </S.Cancel>
    ),
    block: (
      <S.Block onPress={onPress}>
        <T.ButtonText2 white>{text}</T.ButtonText2>
      </S.Block>
    ),
    color: (
      <S.Color onPress={onPress} color={color}>
        <T.ButtonText2 white>{text}</T.ButtonText2>
      </S.Color>
    ),
  }
  return buttons[type]
}

const Button: FunctionComponent<Props> = props => {
  return <>{getButtonComponent(props)}</>
}

export default Button
