import React from 'react';
import { connect } from "react-redux";

import { addNewSmurf, setError } from "../actions/index";

class AddForm extends React.Component {
   
        state = {
            
            name: "",
            position: "",
            nickname: "",
            description: "",
            id: Date.now()
        }
    

    handleChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return  this.setState({
            name: "",
            position: "",
            nickname: "",
            description: ""
        });
    }

    render() {

        return (<div>
            <h2>New Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    
                    <input onChange={this.handleChange} value={this.state.name}  />
                     <input onChange={this.handleChange} value={this.state.position}  />
                     <input onChange={this.handleChange} value={this.state.nickname}  />

                  
                    <input onChange={this.handleChange} value={this.state.description}  />
                </div>

                {this.props.error &&
                    <div data-testid="error"  role="alert">Error: {this.props.error}</div>
                }
                <button>Submit Smurf</button>
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, { addNewSmurf, setError })(AddForm);

