import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import './style.scss'

import image1 from '../../assets/images/01-Six-Elements-of-Modern-House-Design-You-Need-to-Know.jpg'
import image2 from '../../assets/images/modern-house-kv-town-3d-model-low-poly-max-obj-3ds-fbx-stl.jpg'

let images = [image1 ,image2]

const Shop = (props) => {
    let run = useRef(true)
    let a = useRef(0)
    
    useEffect(() => {
        if(run.current){
            setInterval((image = document.querySelector('.content .img img')) => {
                image.src = images[a.current % 2]
                a.current ++
            }, 5000)
            run.current = false
        }
    }, [])
    
    return(
        <main className='Shop'>
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
                  <img alt="on Sale" src={image1} />
                </div>
            </div>
            <div className='bottomDiv'>
                <div>Scroll Down</div>
                <div>01/04</div>
            </div>
        </main>
    )
}

export default Shop