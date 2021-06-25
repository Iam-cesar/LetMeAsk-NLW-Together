import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Room } from './pages/Room';
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/Authcontext'

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />
          <Route path='/admin/rooms/:id' component={AdminRoom} />
        </Switch>
      </AuthContextProvider>   
    </Router>
  );
}

export default App;
