import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';

import NewForm from './pages/NewForm';
import Main from './pages/Main';
import store from './redux/store';

import styles from './App.module.scss';
import 'antd/dist/antd.css';


function App() {
  const [logIn, setLogIn] = useState(false);


  return (
    <Provider store={store}>

      <div className={styles.App}>

        <Routes>

          {logIn
            ? <Route path='*' element={<Main logIn={logIn} setLogIn={setLogIn} />} />
            : <Route path='*' element={<NewForm logIn={logIn} setLogIn={setLogIn} />} />
          }
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
