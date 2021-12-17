import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const screenSize = {
  width,
  height,
}

export const fontSize = {
  small: 12,
  ssmedium: 14,
  smedium: 16,
  medium: 18,
  large: 20,
  xlarge: 24,
  xxlarge: 48,
}

export const spacing = {
  0: 0,
  0.5: 4,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  3.5: 28,
  4: 32,
  5: 40,
}

export const iconSize = {
  small: 14,
  smedium: 20,
  medium: 24,
  large: 34,
  xlarge: 46,
}

export const borderRadius = {
  xsmall: 4,
  small: 8,
  medium: 14,
  large: 20,
  xlarge: 25,
}

export const shadow = {
  medium: '0px 6px 24px',
  android_elevation: 4,
}
