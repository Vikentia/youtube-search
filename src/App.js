import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NewForm from './pages/NewForm';
import Main from './pages/Main';

import './App.css';
import 'antd/dist/antd.css';


function App() {
  const [logIn, setLogIn] = useState(false);

  return (


    <div className="App">

      <Routes>
        {logIn
          ? <Route path='*' element={<Main logIn={logIn} setLogIn={setLogIn} />} />
          : <Route path='*' element={<NewForm logIn={logIn} setLogIn={setLogIn} />} />
        }
      </Routes>
    </div>

  );
}

export default App;
