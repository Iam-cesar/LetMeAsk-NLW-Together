import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'

import {AuthContextProvider} from './contexts/Authcontext'

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContextProvider>   
    </Router>
  );
}

export default App;
