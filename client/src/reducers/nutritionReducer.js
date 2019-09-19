export default function nutritionReducer(state = {loading: false, facts: [] }, action){ 
    switch (action.type) {
        case 'LOADING_FACTS': 
        return Object.assign({}, {...state}, {loading: true})

        case 'FETCH_FACTS': 
        return {...state, facts: [...state.facts, action.payload].flat(), loading: false}

        default: 
        return state

    }


}