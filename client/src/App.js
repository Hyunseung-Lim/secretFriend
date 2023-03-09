import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import { MainPage } from './Pages/MainPage';
import { ChatPage } from './Pages/ChatPage';
import { CreationPage } from './Pages/CreationPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/create' element={<CreationPage/>}/>
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
