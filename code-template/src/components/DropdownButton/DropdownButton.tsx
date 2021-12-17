import React, { FunctionComponent, useState } from 'react'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  label: string
  initState?: 'open' | 'close'
  onPress: Function
}

const DropdownButton: FunctionComponent<Props> = ({ label, initState = 'close', onPress }) => {
  const [isOpening, setOpening] = useState(initState === 'open')

  const handleToggle = () => {
    setOpening(current => !current)
    onPress()
  }

  return (
    <S.Container onPress={handleToggle} activeOpacity={1}>
      <T.ButtonText2 bold>{label}</T.ButtonText2>
      {isOpening ? (
        <S.OpenedImage
          source={require('../../assets/images/arrow-down-stroke.png')}
          resizeMode="contain"
        />
      ) : (
        <S.ClosedImage
          source={require('../../assets/images/arrow-right-stroke.png')}
          resizeMode="contain"
        />
      )}
    </S.Container>
  )
}

export default DropdownButton
