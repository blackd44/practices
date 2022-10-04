import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Shop from './pages/shop/index'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/shop' element={
            <Shop />
          } />
      </Routes>
    </>
  );
}

export default App;
