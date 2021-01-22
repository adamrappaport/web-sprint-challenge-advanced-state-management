import React from 'react';
import { connect } from "react-redux";

import {findSmurf } from "../actions/index";

import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.findSmurf();
    }

    render() {

        if (this.props.isLoading) {
            return <h2>Loading </h2>
        }
        
        else if (this.props.error) {
            return <h2>Erro {this.props.error}</h2>
        }

       else return (<div>
            {
                this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} key={smurf.id} />
                })
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}



export default connect(mapStateToProps, {findSmurf})(SmurfDisplay);