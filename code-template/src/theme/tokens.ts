/**
 * Options
 */
import { colors, neutrals } from './colors'
import { fontSize, screenSize, iconSize, borderRadius, spacing, shadow } from './dimensions'

const branding = {
  primary: '#eee',
  primary_light: '#fff',
  primary_on: '#000',
}

/**
 * Decisions
 */

type ThemeConfig = {
  background: string
  foreground: string
  text: string
}

const light: ThemeConfig = {
  background: neutrals[1],
  foreground: branding.primary,
  text: branding.primary_on,
}

const dark: ThemeConfig = light

export const themes = {
  light,
  dark,
}

export const tokens = {
  colors: {
    ...colors,
    neutrals,
  },
  font_size: {
    ...fontSize,
  },
  screen_width: {
    ...screenSize,
  },
  spacing: {
    ...spacing,
  },
  icon_size: {
    ...iconSize,
  },
  border_radius: {
    ...borderRadius,
  },
  shadow: {
    ...shadow,
  },
}

export function getThemeConfig(mode: ThemeConfig) {
  return {
    ...tokens,
    ...mode,
  }
}
