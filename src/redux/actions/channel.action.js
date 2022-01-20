import request from '../../api'
import {
   CHANNEL_DETAILS_FAIL,
   CHANNEL_DETAILS_REQUEST,
   CHANNEL_DETAILS_SUCCESS,
} from '../actionType'

export const getChannelDetails = id => async dispatch => {
   try {
      dispatch({
         type: CHANNEL_DETAILS_REQUEST,
      })

      const { data } = await request('/channels', {
         params: {
            part: 'snippet,statistics,contentDetails',
            id,
         },
      })
      dispatch({
         type: CHANNEL_DETAILS_SUCCESS,
         payload: data.items[0],
      })
   } catch (error) {
      
      dispatch({
         type: CHANNEL_DETAILS_FAIL,
         payload: error.response.data,
      })
   }
}


// export const checkSubscriptionStatus = id => async (dispatch, getState) => {
//   // TODO: console.log(getState().auth) //access token is there
//     try {
//        const { data } = await request('/subscriptions', {
//           params: {
//              part: 'snippet',
//              forChannelId: id,
//              mine: true,
//           },
//           headers: {
//              Authorization: `Bearer ${getState().auth.accessToken}`,// TODO: find Another way to access access token
//           },
//        })
//        dispatch({
//           type: SET_SUBSCRIPTION_STATUS,
//           payload: data.items.length !== 0,
//        })
//        //TODO: console.log(data)
//     } catch (error) {
//        console.log(error.response.data)
//     }
//  }