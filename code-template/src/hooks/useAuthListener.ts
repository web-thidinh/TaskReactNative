import auth from '@react-native-firebase/auth'
import { resetRequests } from '@redux-requests/core'
import { useDispatchRequest } from '@redux-requests/react'
import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { FETCH_USER } from '../redux/requests/modules/user'
import useConnectRequest from './useConnectRequest'

const authInstance = auth()

const useAuthListener = () => {
  const user = useConnectRequest(FETCH_USER, { defaultData: null })
  const [fbUser, fbUserLoading, fbUserError] = useAuthState(authInstance as any)
  const [initialized, setInitialized] = useState(false)
  const previousFbUser = useRef(null)
  const dispatchRequest = useDispatchRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!previousFbUser.current && fbUser) {
      // Firebase user signed in
      // dispatchRequest(actions.requests.user.fetchUser())
    }
    if (previousFbUser.current && !fbUser) {
      // Firebase user signed out
      dispatchRequest(resetRequests() as any)
    }
    if (previousFbUser.current && fbUser) {
      // Firebase user updated
    }
    if (!initialized) {
      setInitialized(true)
    }
    previousFbUser.current = fbUser
  }, [fbUser, dispatch, dispatchRequest, initialized])

  return {
    firebase: { user: fbUser, loading: fbUserLoading, error: fbUserError },
    api: { user: user.data, loading: user.loading, error: user.error },
    loading: user.loading || fbUserLoading,
    signedIn: user.data && fbUser,
    error: user.error || fbUserError,
    initialized,
  }
}

export default useAuthListener
