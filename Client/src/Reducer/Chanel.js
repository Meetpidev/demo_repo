import PendingIcon from '@mui/icons-material/Pending';

const chanellReducer = (states=[],action)=>{

    switch (action.type){

        case "UPDATE_DATA":
            return states.map(state=>state._id === PendingIcon.payload._id? action.payload: state);

        case "FETCH_CHANELS":
            return action.payload;

        default:
            return states;    
    }
}

export default chanellReducer;