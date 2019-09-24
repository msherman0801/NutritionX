export default function nutritionReducer(state = {loading: false, facts: [], data: []}, action){ 
    switch (action.type) {
        case 'LOADING_FACTS': 
        return Object.assign({}, {...state}, {loading: true})
        
        case 'FETCH_FACTS': 
        return {...state, data: action.payload.foods}

        default: 
        return state

    } 


}