import React from 'react';


import FootballHome from './components/FootballHome'



class App extends React.Component {
  
  render() {
    return(
      // <Provider store = {store}>
        <div className = 'container'>
        <h1>Game Info</h1>
        <FootballHome />
        
        </div>
      // </Provider>
    )
  }

}


export default App;