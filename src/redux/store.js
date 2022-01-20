import { createStore,applyMiddleware, combineReducers} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { homeVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer } from "./reducers/videos.reducer";
import { commentListReducer } from "./reducers/comments.reducer"


const rootReducer = combineReducers({
    auth : authReducer,
    homeVideos : homeVideosReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer,
    commentList : commentListReducer,
    relatedVideos : relatedVideoReducer,
    searchedVideos : searchedVideosReducer,
})

const store = createStore( rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))


export default store;



// import { createStore,applyMiddleware} from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// const initialState = {
//     name : "Rakesh",
//     age : 28
// }


// const reducer = initialState => initialState

// const store = createStore( reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))


// export default store;