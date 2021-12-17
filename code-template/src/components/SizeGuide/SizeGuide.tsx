import React, { FunctionComponent, useState, useEffect, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import useFilter from '../../hooks/useFilter'
import Buttons from '../Buttons'

import ProductDetailMaterial from '../ProductDetailMaterial'
import * as S from './styled'

type Props = {
  sizes: any[]
}

const SizeGuide: FunctionComponent<Props> = ({ sizes }) => {
  const [sizeToGuide, setSizeToGuide] = useState<string>('')
  const { t } = useTranslation()

  const { sizes: macro_sizes } = useFilter()

  useEffect(() => {
    if (macro_sizes?.length) {
      setSizeToGuide(macro_sizes[2]?.id)
    }
  }, [macro_sizes])

  return (
    <S.Container>
      <S.CGrid>
        {macro_sizes.map(({ id, attributes: { name } }) => {
          const isSelected = sizeToGuide === id
          return (
            <S.ItemWrapper key={`${id}`}>
              <Buttons
                onPress={() => setSizeToGuide(id)}
                radius="square"
                size="big"
                fits={['w']}
                text={name}
                type={isSelected ? 'primary' : 'secondary'}
              />
            </S.ItemWrapper>
          )
        })}
      </S.CGrid>
      <ProductDetailMaterial label={t('product.vita')} value="95cm" />
      <ProductDetailMaterial label={t('product.flanks')} value="120cm" />
      <ProductDetailMaterial label={t('product.leg')} value="110cm" />
    </S.Container>
  )
}

export default SizeGuide
