import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Pages/Login/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './Views/Sidebar/sidebar'
import Dashboard from './Views/Pages/Dashboard/dashboard'
import ViewBugPage from './Views/Pages/viewBugs'
import CreateBug from './Views/Components/Bug Create/bugForm'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> : 
    <>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Dashboard />}></Route>
        <Route path='/viewbugs' element={<ViewBugPage />}></Route>
        <Route path='/create' element={
          <div className='page-container'><CreateBug title="Create Bug" /></div>}></Route>
      </Routes>
    </>
    }
    </Router>
  );
}

export default App;
