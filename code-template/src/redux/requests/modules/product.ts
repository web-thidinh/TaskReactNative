import { RequestAction } from '@redux-requests/core'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_SIMILAR_PRODUCTS = 'FETCH_SIMILAR_PRODUCTS'
export const FETCH_BRAND_PRODUCTS = 'FETCH_BRAND_PRODUCTS'

export const FETCH_PRODUCT_DETAIL = 'FETCH_PRODUCT_DETAIL'

type Filter = {
  field: string
  operator: string
  value: string
}

const fetchProducts = (filters?: Filter[], sorts?: string[]): RequestAction => {
  let url = '/products?populate=mainImage,variants,variants.size,subscriptionType'
  // add sort query
  if (sorts?.length) url += `&sort=${sorts.toString()}`

  // add filter query
  if (filters?.length) {
    filters.forEach(({ field, operator, value }) => {
      url += `&filters${field}${operator}=${value}`
    })
  }
  return {
    type: FETCH_PRODUCTS,
    request: {
      url,
      method: 'GET',
    },
  }
}

const fetchProductDetail = (id: string) => {
  return {
    type: FETCH_PRODUCT_DETAIL,
    request: {
      url: `/products/${id}?populate=mainImage,images,variants,variants.size,subscriptionType,productCategories,brand`,
      method: 'GET',
    },
  }
}

const fetchSimilarProducts = (ids: string[]) => {
  let url =
    '/products?filters[isAvailable][$eq]=true&populate=mainImage,variants,variants.size,subscriptionType'
  ids.forEach(id => {
    url += `&filters[productCategories][id][$eq]=${id}`
  })
  return {
    type: FETCH_SIMILAR_PRODUCTS,
    request: {
      url,
      method: 'GET',
    },
  }
}

const fetchBrandProducts = (ids: string[]) => {
  let url =
    '/products?filters[isAvailable][$eq]=true&populate=mainImage,variants,variants.size,subscriptionType'
  ids.forEach(id => {
    url += `&filters[brand][id][$eq]=${id}`
  })
  return {
    type: FETCH_BRAND_PRODUCTS,
    request: {
      url,
      method: 'GET',
    },
  }
}

export const productActions = {
  fetchProducts,
  fetchProductDetail,
  fetchSimilarProducts,
  fetchBrandProducts,
}
