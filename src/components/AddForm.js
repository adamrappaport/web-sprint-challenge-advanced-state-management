import React ,{useState} from 'react';
import { connect } from "react-redux";


import { addNewSmurf, setError } from "../actions/index";


const initialSmurf = {
            
    name: "",
    position: "",
    nickname: "",
    description: "",
    id: Date.now()
}



function AddForm(props) {
   const [smurf, setSmurf] = useState(initialSmurf)
    
    

  const  handleChange = (event) => {
        setSmurf({
            ...smurf, [event.target.name]: event.target.value
        });
    }

   const  handleSubmit = (event) => {
        event.preventDefault();
        const makeNewBlue = {
            name: smurf.name,
            nickname: smurf.nickname,
            position: smurf.position,
            description: smurf.description

        }

        for(let i = 0; i <smurf.length; i++){
            if (smurf.name === props.smurf[i].name){
                alert(' seats taken try again')
            }
        }
        
        if (smurf.name ==='' || smurf.position === '' || smurf.nickname ===''){
            props.setError("error man")
        } else {
            props.addNewSmurf(makeNewBlue)
        }


    }
    

 

      
        return (<div>
            <h2>New Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <input onChange={handleChange} value={smurf.name}  />
                     <input onChange={handleChange} value={smurf.position}  />
                     <input onChange={handleChange} value={smurf.nickname}  />

                  
                    <input onChange={handleChange} value={smurf.description}  />
                </div>

                {props.error &&
                    <div data-testid="error"  role="alert">Error: {props.error}</div>
                }
                <button>Submit Smurf</button>
            </form>
            </div>
        );
    }


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, { addNewSmurf, setError })(AddForm);

