import { actions } from '../redux'
import { useDispatchRequest } from '@redux-requests/react'
import { FETCH_BRAND_PRODUCTS } from '../redux/requests/modules/product'
import useConnectRequest from './useConnectRequest'

const useBrandProduct = () => {
  const brandProduct = useConnectRequest(FETCH_BRAND_PRODUCTS, { defaultData: [] })

  const dispatchRequest = useDispatchRequest()

  const getBrandProducts = (productCategoryIds: string[]) => {
    dispatchRequest(actions.requests.product.fetchSimilarProducts(productCategoryIds))
  }

  return {
    brandProducts: brandProduct.data.data,

    getBrandProducts,
  }
}

export default useBrandProduct
