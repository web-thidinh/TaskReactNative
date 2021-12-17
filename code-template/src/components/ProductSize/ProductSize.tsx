import React, { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import * as S from './styled'
import * as T from '../../theme/typography'

type Props = {
  sizes: string[]
  font?: 'small' | 'medium'
}

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const ProductSize: FunctionComponent<Props> = ({ sizes = [], font = 'small' }) => {
  const theme = useTheme()
  return (
    <S.Container>
      {defaultSizes.map((size, index) => {
        const isStocking = sizes.includes(size)
        if (font === 'small') {
          return (
            <T.Text3
              key={`${index}`}
              lineThrough={!isStocking}
              color={isStocking ? theme.colors.primary_black : theme.colors.third_color}
            >
              {size}
              {'  '}
            </T.Text3>
          )
        }
        return (
          <T.Text2
            key={`${index}`}
            lineThrough={!isStocking}
            bold={isStocking}
            color={isStocking ? theme.colors.primary_black : theme.colors.third_color}
          >
            {size}
            {'  '}
          </T.Text2>
        )
      })}
    </S.Container>
  )
}

export default ProductSize
