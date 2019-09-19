import React from 'react'
import { connect } from 'react-redux' 
import { fetchNutritionFacts } from '../actions/fetchNutritionFacts'



const initialState = {
    input: ''
}

class InputField extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            input: ''
        }
    }


    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault() 
        this.props.fetchNutritionFacts(this.state)
        this.setState(initialState)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='input' value={this.state.input} onChange={this.onChange} /> 
                    <input type='submit' />
                </form>
            </div>
        )
    }


}

export default connect(null, {fetchNutritionFacts})(InputField)