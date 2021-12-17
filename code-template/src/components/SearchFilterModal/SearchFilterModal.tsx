import React, { useImperativeHandle, useState, forwardRef, Ref, useMemo, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'styled-components'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Modal from 'react-native-modal'
import { useTranslation } from 'react-i18next'
import Spacer from 'react-styled-spacer'
import Buttons from '../Buttons'
import DropdownButton from '../DropdownButton'
import * as S from './styled'
import * as T from '../../theme/typography'
import { IRefsFilterModal } from './interfaces'
import Switch from '../Switch'
import Separator from '../Separator'
import useFilter from '../../hooks/useFilter'
import { useDispatch } from 'react-redux'
import { actions } from '../../redux'
import { DEFAULT_SORT_PARAMS } from '../../hooks/useProducts'

type Props = {}

const getLatestResult = (arr: string[], item: string) => {
  if (!arr.includes(item)) {
    arr.push(item)
  } else {
    arr.splice(arr.indexOf(item), 1)
  }
  return arr
}

const SearchFilterModal = forwardRef((props: Props, ref: Ref<IRefsFilterModal>) => {
  const { top } = useSafeAreaInsets()
  const dispatch = useDispatch()
  const theme = useTheme()
  const { sizes, colors, brands } = useFilter()
  const [isAvailable, setAvailable] = useState(true)
  const [sortParams, setSortParams] = useState<string[]>(DEFAULT_SORT_PARAMS)
  const [brandParams, setBandParams] = useState<string[]>([])
  const [sizeParams, setSizeParams] = useState<string[]>([])
  const [colorParams, setColorParams] = useState<string[]>([])

  const [isBrandDropdownOpening, setBrandDropdownOpening] = useState(false)
  const [isColorDropdownOpening, setColorDropdownOpening] = useState(false)
  const [isSizeDropdownOpening, setSizeDropdownOpening] = useState(false)

  const toggleAvailable = () => setAvailable(current => !current)

  const toggleBrandDropdown = () => setBrandDropdownOpening(current => !current)

  const toggleSizeDropdown = () => setSizeDropdownOpening(current => !current)

  const toggleColorDropdown = () => setColorDropdownOpening(current => !current)

  const [isModalVisible, setModalVisible] = useState(false)
  const { t } = useTranslation()

  useImperativeHandle(ref, () => ({ open, close }))

  const open = () => {
    setModalVisible(true)
  }

  const close = () => {
    setModalVisible(false)
  }

  const handleSelectSortParams = (value: string) => {
    setSortParams(getLatestResult([...sortParams], value))
  }

  const handleSelectBrandParams = (value: string) => {
    setBandParams(getLatestResult([...brandParams], value))
  }

  const handleSelectSizeParams = (value: string) => {
    setSizeParams(getLatestResult([...sizeParams], value))
  }

  const handleConfirm = () => {
    let filters = []
    if (brandParams.length) {
      const filter = {
        field: '[brand][id]',
        operator: '[$in]',
        value: `[${brandParams.toString()}]`,
      }
      filters.push(filter)
    }
    if (sizeParams.length) {
      sizeParams.forEach(size => {
        const filter = {
          field: '[variants][size][id]',
          operator: '[$eq]',
          value: size,
        }
        filters.push(filter)
      })
    }
    filters.push({
      field: '[isAvailable]',
      operator: '[$eq]',
      value: isAvailable,
    })
    dispatch(actions.requests.product.fetchProducts(filters, sortParams))
    close()
  }

  const renderBrands = useMemo(() => {
    if (!isBrandDropdownOpening) {
      return null
    }
    return (
      <Fragment>
        <S.VWrapGrid>
          {brands.map(({ id, attributes: { name } }) => {
            const isSelected = brandParams.includes(id)
            return (
              <S.ItemWrapper key={`${id}`}>
                <Buttons
                  onPress={() => handleSelectBrandParams(id)}
                  radius="square"
                  fits={['w']}
                  text={name}
                  type={isSelected ? 'primary' : 'secondary'}
                />
              </S.ItemWrapper>
            )
          })}
        </S.VWrapGrid>
        <Spacer h={12} />
      </Fragment>
    )
  }, [brands, brandParams, isBrandDropdownOpening])

  const renderSizes = useMemo(() => {
    if (!isSizeDropdownOpening) {
      return null
    }
    return (
      <Fragment>
        <S.VWrapGrid>
          {sizes.map(({ id, attributes: { name } }) => {
            const isSelected = sizeParams.includes(id)
            return (
              <S.ItemWrapper key={`${id}`}>
                <Buttons
                  onPress={() => handleSelectSizeParams(id)}
                  radius="square"
                  fits={['w']}
                  text={name}
                  type={isSelected ? 'primary' : 'secondary'}
                />
              </S.ItemWrapper>
            )
          })}
        </S.VWrapGrid>
        <Spacer h={12} />
      </Fragment>
    )
  }, [sizes, sizeParams, isSizeDropdownOpening])

  const renderColors = useMemo(() => {
    if (!isColorDropdownOpening) {
      return null
    }
    return (
      <Fragment>
        <S.VWrapGrid>
          {colors.map(({ id, attributes: { hex } }) => {
            return (
              <S.ItemWrapper key={`${id}`}>
                <Buttons onPress={() => {}} color={hex} type="color" />
              </S.ItemWrapper>
            )
          })}
        </S.VWrapGrid>
        <Spacer h={12} />
      </Fragment>
    )
  }, [colors, isColorDropdownOpening])

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.modal}
      onSwipeComplete={close}
    >
      <S.Container statusBarHeight={top}>
        <SafeAreaView edges={['bottom']} style={styles.safeArea}>
          <S.Content>
            <S.Button activeOpacity={0.8} onPress={close}>
              <S.Image source={require('../../assets/images/arrow-top.png')} resizeMode="contain" />
            </S.Button>
            <Spacer h={20} />
            <T.Title>Filter your search</T.Title>
            <Spacer h={40} />
            <Switch value={isAvailable} onChange={toggleAvailable} label={t('filter.available')} />
            <Spacer h={24} />
            <Separator height={1} />
            <Spacer h={24} />

            <T.ButtonText2 bold>{t('filter.sortBy')}</T.ButtonText2>
            <Spacer h={18} />
            <S.VGrid>
              <Buttons
                onPress={() => handleSelectSortParams(DEFAULT_SORT_PARAMS[0])}
                radius="square"
                text={t('filter.latestArrivals')}
                type={sortParams.includes(DEFAULT_SORT_PARAMS[0]) ? 'primary' : 'secondary'}
              />
              <Spacer w={16} />
              <Buttons
                onPress={() => handleSelectSortParams(DEFAULT_SORT_PARAMS[1])}
                radius="square"
                text={t('filter.recommended')}
                type={sortParams.includes(DEFAULT_SORT_PARAMS[1]) ? 'primary' : 'secondary'}
              />
            </S.VGrid>
            <Spacer h={24} />
            <Separator height={1} />

            {/* change brand */}
            <DropdownButton label={t('filter.brand')} onPress={toggleBrandDropdown} />
            {renderBrands}

            <Separator height={1} />

            {/* change size */}
            <DropdownButton label={t('filter.size')} onPress={toggleSizeDropdown} />
            {renderSizes}

            <Separator height={1} />

            {/* change color */}
            <DropdownButton label={t('global.color')} onPress={toggleColorDropdown} />
            {renderColors}

            {/* number of items */}
            <S.ItemsWrapper>
              <T.Text2 color={theme.colors.confirm}>1000 {t('filter.items')}</T.Text2>
            </S.ItemsWrapper>

            <S.SGrid>
              <Buttons type="secondary" size="big" text={t('filter.remove')} onPress={close} />
              <Buttons
                type="primary"
                size="big"
                text={t('filter.confirm')}
                onPress={handleConfirm}
              />
            </S.SGrid>
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

export default SearchFilterModal
