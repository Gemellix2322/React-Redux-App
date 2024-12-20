import {handleInitialData} from "../actions/shared";
import { useEffect } from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { connect } from "react-redux";


const App = (props) => {

    useEffect(() => {
        props.dispatch(handleInitialData());
    }, [])

    if(props.loading === true){
        return (
            <div id="loading">
                <h3 id="loading-text">Loading</h3>
                <div id="loading-spinner"></div>
            </div>
        )
    }

    return (
        <div>
            <center><h1>REACT</h1></center>
            <div>
            <ConnectedTodos/>
            <ConnectedGoals/>  
            </div>    
        </div>
        
    )
}

export default connect((state) => ({
    loading: state.loading,
}))(App);