import React, { Component } from 'react';
import { addToList } from '../redux/action';
import { connect } from 'react-redux'

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const { value } = this.state
        const { addToList } = this.props
        return (
            <div>
                <input
                    value={value}
                    onChange={this.handleChange}
                    placeholder="Add Items"
                />
                <button onClick={() => { addToList(value) }}>+</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToList: (title) => dispatch(addToList(title))
})

export default connect(null, mapDispatchToProps)(TodoInput);