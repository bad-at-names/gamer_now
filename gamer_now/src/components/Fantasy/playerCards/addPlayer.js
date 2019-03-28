import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTeam } from '../../../store/actions/userActions';


class AddPlayer extends Component {
    state = {
        pId: null
    }
    

    addPlayerHandler = () => {
        updateTeam(this.props.state);
    }

    render(){
        return(
            <button onClick = { ()=>{ this.addPlayerHandler() } } className="add-buttons">Add to team</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      pId: state.pId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (pId) => dispatch(updateTeam(pId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);