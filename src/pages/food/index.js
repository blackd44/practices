import Typed from 'react-typed'
import './style.css'
import image from '../../assets/images/Capture.PNG'

const Food = ( ) => {
    let backimage = {
        backgroundImage: `url(${image})`
    }
    return(
        <main className="food">
            <div>
                <div className='image' style={backimage}>
                </div>
                <div className='foodcontent'>
                    <div>
                        <span>food recipe</span>
                    </div>
                    <div>
                        <h4>How to become a good chef</h4>
                        <p>
                            You might decide to become a chef because you enjoy cooking and like to experiment in kitchen.
                            While it's a demanding career, it can also be very satisfying if it's something you love and you wish to 
                            You might decide to become a chef because you enjoy cooking and like to experiment in kitchen.
                            While it's a demanding career, it can also be very satisfying if it's something you love and you wish to 
                            You might decide to become a chef because you enjoy cooking and like to experiment in kitchen.
                            While it's a demanding career, it can also be very satisfying if it's something you love and you wish to...
                        </p>
                    </div>
                    <div>By Tutor Joes</div>
                </div>
            </div>
        </main>
    )
}

export default Food