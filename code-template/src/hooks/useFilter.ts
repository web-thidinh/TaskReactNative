import { actions } from './../redux'
import { useDispatchRequest } from '@redux-requests/react'
import { useEffect } from 'react'
import { FETCH_COLOR, FETCH_BRAND, FETCH_SIZE } from './../redux/requests/modules/filter'
import useConnectRequest from './useConnectRequest'

const useFilter = () => {
  const color = useConnectRequest(FETCH_COLOR, { defaultData: [] })
  const brand = useConnectRequest(FETCH_BRAND, { defaultData: [] })
  const size = useConnectRequest(FETCH_SIZE, { defaultData: [] })

  const dispatchRequest = useDispatchRequest()

  useEffect(() => {
    dispatchRequest(actions.requests.filter.fetchBrands())
    dispatchRequest(actions.requests.filter.fetchColors())
    dispatchRequest(actions.requests.filter.fetchSizes())
  }, [])

  return {
    brands: brand.data.data,
    colors: color.data.data,
    sizes: size.data.data,
  }
}

export default useFilter
