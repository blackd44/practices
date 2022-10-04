import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Shop from './pages/shop/index'
import SignUp from './pages/signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/*' element={
          <>
            <h2>Oops - 404</h2>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
