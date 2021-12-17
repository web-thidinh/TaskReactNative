import { actions } from '../redux'
import { useDispatchRequest } from '@redux-requests/react'
import { FETCH_SIMILAR_PRODUCTS } from '../redux/requests/modules/product'
import useConnectRequest from './useConnectRequest'

const useSimilarProduct = () => {
  const similarProduct = useConnectRequest(FETCH_SIMILAR_PRODUCTS, { defaultData: [] })

  const dispatchRequest = useDispatchRequest()

  const getSimilarProducts = (productCategoryIds: string[]) => {
    dispatchRequest(actions.requests.product.fetchSimilarProducts(productCategoryIds))
  }

  return {
    similarProducts: similarProduct.data.data,

    getSimilarProducts,
  }
}

export default useSimilarProduct
