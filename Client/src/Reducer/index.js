import { combineReducers } from "redux";
import authReduer from "./auth";
import currentUserReducer from "./currentUser";
import chanellReducer from "./Chanel";
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import historyReducer from "./history";
import pointsReducer from "./points";
import commentReducer from "./comments";
import subscriptionReducer from "./subscribe";

export default combineReducers({
    authReduer,
    currentUserReducer,
    chanellReducer,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    historyReducer,
    commentReducer,
    pointsReducer,
    subscriptionReducer,
})