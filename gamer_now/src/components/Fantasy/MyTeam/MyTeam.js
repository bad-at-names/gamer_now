import React, {Component} from 'react';
import '../Fantasy.css';

class MyTeam extends Component {
    state = {
        tanks: [ ],
        offense: [ ],
        support: [ ]
    }
    
    render(){
        return(
            <div id = "my-team">
                this is your team
            </div>
        )
    }
}

export default MyTeam;