import { FETCH_PRODUCT_DETAIL, FETCH_SIMILAR_PRODUCTS } from './../redux/requests/modules/product'
import { actions } from '../redux'
import { useDispatchRequest } from '@redux-requests/react'
import { useEffect } from 'react'
import useConnectRequest from './useConnectRequest'

const useProductDetail = (id: string) => {
  const product = useConnectRequest(FETCH_PRODUCT_DETAIL, { defaultData: {} })
  const dispatchRequest = useDispatchRequest()

  useEffect(() => {
    dispatchRequest(actions.requests.product.fetchProductDetail(id))
  }, [id])

  return {
    loading: product.loading,
    product: product.data.data,
    error: product.error,
  }
}

export default useProductDetail
