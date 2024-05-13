import './App.css';
import {reducer} from './reducer';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Page1 from './Page1';


const store = configureStore({reducer});
function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Page1/>
        </div>
    </Provider>
  );
}

export default App;
