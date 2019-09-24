import React from 'react'


const Meal = props => {
    return (
       
        <ul>
        <li>{props.text.food_name}</li>
        
        <label>Total Calories</label>
        <li>{props.text.nf_calories}</li>
        
        <label>Calories from Fat</label>
        <li>{props.text.nf_total_fat * 9}</li>

        <label>Total Fat</label>
        <li>{props.text.nf_total_fat}</li>

        <label>Saturated Fat</label>
        <li>{props.text.nf_saturated_fat}</li>

        <label>Cholesterol</label>
        <li>{props.text.nf_cholesterol}</li>
        
        <label>Sodium</label>
        <li>{props.text.nf_sodium}</li>

        <label>Potassium</label>
        <li>{props.text.nf_potassium}</li>

        <label>Total Carbohydrates</label>
        <li>{props.text.nf_total_carbohydrate}</li>

        <label>Dietary Fiber</label>
        <li>{props.text.nf_dietary_fiber}</li>

        <label>Sugars</label>
        <li>{props.text.nf_sugars}</li>

        <label>Protien</label>
        <li>{props.text.nf_protein}</li>
        
        </ul>
    )
}

export default Meal