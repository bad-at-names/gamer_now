import React from 'react';
import PlayerPortaits from './PlayerPortaits'
import { connect } from 'react-redux';
import userReducer from '../../store/reducers/userReducer';
import ProjectSummary from './PlayerPortaits';

const TeamBar = ({team}) => {
    return (
        <div>
            { team && team.map(team => {
                return (
                    <PlayerPortaits team={team} key={team.id} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

//export default connect(mapStateToProps)(TeamBar);
export default TeamBar;