import { FunctionComponent } from 'react'
import { Text, TextProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import Fonts, { FontWeights } from './fonts'

export type ThemeColorProps = {
  primary?: boolean | string
  primaryLight?: boolean | string
  secondary?: boolean | string
  accent?: boolean | string
  primaryVariant?: boolean | string
}

export type TypographyProps = {
  light?: boolean | string
  centered?: boolean | string
  uppercase?: boolean | string
  lowercase?: boolean | string
  underline?: boolean | string
  bold?: boolean | string
  color?: string
  fontSize?: number
  white?: boolean
  as?: any
  lineThrough?: boolean
} & ThemeColorProps

export type BodyProps = {
  demi?: boolean
}

export type TypographyComponent<T = {}> = FunctionComponent<TextProps & TypographyProps & T>
export type LabelProps = { small?: boolean | string }
export const textBase = css``

export const textProps = css<TypographyProps>`
  ${({ light, theme }) => light && `color: ${theme.colors.text_light}`}
  ${({ white, theme }) => white && `color: ${theme.colors.white}`}
  ${({ accent, theme }) => accent && `color: ${theme.colors.accent}`}
  ${({ color }) => color && `color: ${color}`}
  ${({ fontSize }) => fontSize && `fontSize: ${fontSize}px`}
  ${({ bold }) => bold && `font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD}`}
  ${({ centered }) => centered && 'text-align: center'}
  ${({ lineThrough }) => lineThrough && 'text-decoration-line: line-through'}
`
export const CustomText: TypographyComponent = styled(Text)`
  color: ${({ theme }) => theme.colors.primary_black};
  ${textBase}
  ${textProps}
`
export const Title: TypographyComponent = styled(CustomText)`
  font-size: 27px;
  line-height: 27px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const Header1: TypographyComponent = styled(CustomText)`
  font-size: 25px;
  line-height: 27px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const Header2: TypographyComponent = styled(CustomText)`
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`

export const Header2Medium: TypographyComponent = styled(CustomText)`
  font-size: 20px;
  line-height: 27px;
  font-family: ${Fonts.HELVETICA_NEUE_MEDIUM};
  ${textProps}
`

export const SubHeader: TypographyComponent = styled(CustomText)`
  font-size: 16px;
  line-height: 27px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const ButtonText1: TypographyComponent = styled(CustomText)`
  font-size: 18px;
  line-height: 27px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
export const ButtonText2: TypographyComponent = styled(CustomText)`
  font-size: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
export const Text1Bold: TypographyComponent = styled(CustomText)`
  font-size: 16px;
  line-height: 18px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const Text1: TypographyComponent = styled(CustomText)`
  font-size: 16px;
  line-height: 18px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
export const Text2Bold: TypographyComponent = styled(CustomText)`
  font-size: 14px;
  line-height: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const Text2: TypographyComponent = styled(CustomText)`
  font-size: 14px;
  line-height: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
export const Text3Bold: TypographyComponent = styled(CustomText)`
  font-size: 11px;
  line-height: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`
export const Text3: TypographyComponent = styled(CustomText)`
  font-size: 11px;
  line-height: 13px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
export const Text4: TypographyComponent = styled(CustomText)`
  font-size: 10px;
  line-height: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`

export const CardTitle1: TypographyComponent = styled(CustomText)`
  font-size: 14px;
  line-height: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`

export const CardTitle1Bold: TypographyComponent = styled(CustomText)`
  font-size: 14px;
  font-family: ${Fonts.HELVETICA_NEUE_SEMI_BOLD};
  ${textProps}
`

export const CardTitle2: TypographyComponent = styled(CustomText)`
  font-size: 12px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
  ${textProps}
`
