import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';

import image from './assets/01-Six-Elements-of-Modern-House-Design-You-Need-to-Know.jpg'

function App() {
  return (
    <>
      <nav>
        <div className='bars'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className='links' >
          <li><Link>HOME</Link></li>
          <li><Link to={'/shop'} className='active'>SHOP</Link></li>
          <li><Link>NEWS</Link></li>
          <li><Link>CONTACT</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/shop' element={
            <>
              <div className='content'>
                <div>
                  <div className='line'></div>
                  <div className='title'>PURCHASE NOW.</div>
                  <div className='summary'>A quite place for living.</div>
                </div>
                <div className='img'>
                  <div className='button'>
                    <div>buy now</div>
                    <div> {'>'} </div>
                  </div>
                  <img alt="on Sale" src={image} />
                </div>
              </div>
              <div className='bottomDiv'>
                <div>Scroll Down</div>
                <div>01/04</div>
              </div>
            </>
          } />
      </Routes>
    </>
  );
}

export default App;
