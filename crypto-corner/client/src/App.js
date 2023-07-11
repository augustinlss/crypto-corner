
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Landing';
import AboutMe from './AboutMe';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path='/aboutMe' exact element={<AboutMe/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
