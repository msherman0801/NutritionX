export const fetchNutritionFacts = (props) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_FACTS'})
            return fetch(`http://localhost:3000/fetch_nutrition_data?input=${props.input}`)
            .then(resp => resp.json())
            .then(data => dispatch({type: 'FETCH_FACTS', payload: data}))
    }

}