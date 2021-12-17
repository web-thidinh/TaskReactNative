import React, { useImperativeHandle, useState, forwardRef, Ref, useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Spacer from 'react-styled-spacer'
import Modal from 'react-native-modal'
import { useTheme } from 'styled-components'
import { useTranslation, Trans } from 'react-i18next'
import Buttons from '../Buttons'
import * as S from './styled'
import * as T from '../../theme/typography'
import { IRefsProductDetail } from './interfaces'
import Separator from '../Separator'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux'

type Props = {}

const subscriptionTypes = [
  {
    price: '39€',
    value: 'Silver',
    subscriptionTitle: <Trans>{'catalogue.silver'}</Trans>,
    description:
      'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 250€',
  },
  {
    price: '69€',
    value: 'Gold',
    subscriptionTitle: <Trans>{'catalogue.gold'}</Trans>,
    description:
      'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 600€',
  },
  {
    price: '99€',
    value: 'Platinum',
    subscriptionTitle: <Trans>{'catalogue.platinum'}</Trans>,
    description:
      'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 1200€',
  },
]

const SubscriptionFilterModal = forwardRef((props: Props, ref: Ref<IRefsProductDetail>) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [subscription, setSubscription] = useState<string>('')
  const dispatch = useDispatch()

  const theme = useTheme()
  const { t } = useTranslation()

  useImperativeHandle(ref, () => ({ open, close }))

  const open = () => {
    setModalVisible(true)
  }

  const close = () => {
    setModalVisible(false)
  }

  const handleApply = () => {
    dispatch(
      actions.requests.product.fetchProducts([
        {
          field: '[subscriptionType][name]',
          operator: '[$eq]',
          value: subscription,
        },
      ])
    )
    close()
  }

  const subscriptions = useMemo(() => {
    return subscriptionTypes.map(({ price, subscriptionTitle, description, value }, index) => {
      const isLatestItem = index === subscriptionTypes.length - 1
      const isSelected = subscription === value
      return (
        <S.Button key={`${index}`} activeOpacity={1} onPress={() => setSubscription(value)}>
          <S.Item>
            <S.PriceWrapper>
              <T.Header1>{price}</T.Header1>
              <T.Text3>{t('catalogue.perMonth')}</T.Text3>
            </S.PriceWrapper>
            <S.DescriptionWrapper>
              <T.Header2>{subscriptionTitle}</T.Header2>
              <T.Text3 color={theme.colors.second_black}>{description}</T.Text3>
            </S.DescriptionWrapper>
            <S.RadioWrapper>
              <S.RadioBorder>{isSelected && <S.Radio />}</S.RadioBorder>
            </S.RadioWrapper>
          </S.Item>
          {!isLatestItem && <Separator height={1} />}
        </S.Button>
      )
    })
  }, [subscription])

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.modal}
      onSwipeComplete={close}
    >
      <S.Container>
        <SafeAreaView edges={['bottom']} style={styles.safeArea}>
          <S.Content>
            <T.Title>Filter by value subscription</T.Title>
            <Spacer h={25} />
            {subscriptions}
            <Spacer h={35} />
            <S.Grid>
              <Buttons type="cancel" text={t('catalogue.cancel')} onPress={close} />
              <Buttons
                type="primary"
                size="big"
                text={t('catalogue.apply')}
                onPress={handleApply}
              />
            </S.Grid>
          </S.Content>
        </SafeAreaView>
      </S.Container>
    </Modal>
  )
})

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  safeArea: {
    flex: 1,
  },
})

export default SubscriptionFilterModal
