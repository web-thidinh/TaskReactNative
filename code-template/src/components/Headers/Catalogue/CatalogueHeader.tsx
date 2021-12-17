import React, { FunctionComponent, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'
import Buttons from '../../Buttons'
import * as S from './styled'
import { IRefsFilterModal } from '../../SearchFilterModal/interfaces'
import SearchFilterModal from '../../SearchFilterModal/SearchFilterModal'
import SubscriptionFilterModal from '../../SubscriptionFilterModal'
import { IRefsProductDetail } from '../../SubscriptionFilterModal/interfaces'
import { StyleSheet } from 'react-native'

type Props = {}

const CatalogueHeader: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const filterModalRef = useRef<IRefsFilterModal>(null)
  const sortModalRef = useRef<IRefsProductDetail>(null)

  const handleOpenFilterModal = () => {
    filterModalRef.current.open()
  }
  const handleOpenSortModal = () => {
    sortModalRef.current.open()
  }

  return (
    <SafeAreaView edges={['top']}>
      <S.Container>
        <Buttons type="select" text={t('catalogue.price')} onPress={handleOpenSortModal} />
        <Buttons
          type="cancel"
          size="big"
          text={t('catalogue.filter')}
          onPress={handleOpenFilterModal}
        />
      </S.Container>

      <SearchFilterModal ref={filterModalRef} />

      <SubscriptionFilterModal ref={sortModalRef} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})

export default CatalogueHeader
