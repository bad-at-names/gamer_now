const initState = {
    team: [
        {id: '1', offense: '4083'},
        {id: '2', offense: '4620'},
        {id: '3', tank: '4024'},
        {id: '4', tank: '4079'},
        {id: '5', support: '4669'},
        {id: '6', support: '4668'}
    ]
  }
  
const userReducer = (state = initState, action) => {
  return state
}

  // const userReducer = (state = initState, action) => {
  //   switch (action.type) {
  //     case 'GET_TEAM_SUCCESS':
  //       console.log('get team success');
  //       return {
  //           ...state
  //       }
  //     case 'GET_TEAM_ERROR':
  //       console.log('get team error');
  //       return state;
  //     case 'UPDATE_TEAM_SUCCESS':
  //       console.log('update team success');
  //       return {
  //           ...state
  //       }
  //     case 'UPDATE_TEAM_error':
  //       console.log('update team error');
  //       return state;
  //     default:
  //       return state;
  //   }
  // };
  
  export default userReducer;