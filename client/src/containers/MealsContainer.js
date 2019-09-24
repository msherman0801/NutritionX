import React from 'react'
import { connect } from 'react-redux'
import Meal from '../components/Meal'


class MealsContainer extends React.Component {

    
    state ={
        fullMeals: {}
    }

    renderMeal = () => this.props.nutrition.data.map((meal) => <Meal key={Math.random(1*10)} text={meal} />)
    


    render() {

        
        return (
            <div>
                {this.renderMeal()} 
                
            </div>
        )
    }



}

    const mapStateToProps = (state) => {
        return {
            nutrition: state.nutrition
            
        }
    }


export default connect(mapStateToProps)(MealsContainer)

