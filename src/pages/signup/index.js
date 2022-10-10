import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'
import Typed from 'react-typed'

import './style.scss'

const SignUp = (props) => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [rePassword, setRePassword] = useState('')
    let [userName, setUserName] = useState('')

    useEffect(() => {
        if(email==='' || password===''){
            LoginButton.current.disabled = true
        }
        else{
            LoginButton.current.disabled = false
        }
    }, [password, email])

    useEffect(() => {
        if(name==='' || userName==='' || email==='' || password==='' || rePassword==='' || (password !== rePassword)){
            CreateButton.current.disabled = true
        }
        else{
            CreateButton.current.disabled = false
        }
    }, [password, email, name, userName, rePassword])

    let create = useRef()
    let login = useRef()
    let CreateButton = useRef()
    let LoginButton = useRef()

    const loginSubmit = e => {
        e.preventDefault()
    }
    const CreateSubmit = e => {
        e.preventDefault()
    }
    return (
        <main className='signup'>
            <Tilt>
                <div className='create' ref={create}>
                    <h2>Create Account</h2>
                    <form method='post' onSubmit={CreateSubmit}>
                        <Typed
                            strings={['Name','full name','Enter your name','eg: firstname lastname']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='text' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/>
                        </Typed>
                        <Typed
                            strings={['Username','Enter your Username','eg: myname44']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='text' name='username' placeholder='Username' value={userName} onChange={e => setUserName(e.target.value)} required/>
                        </Typed>
                        <Typed
                            strings={['Email','Enter your Email','Email address','eg: myemail@email.eme']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        </Typed>
                        <Typed
                            strings={['password','Enter your password','Strong password','eg: Bb.dA@4as*as']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                        </Typed>
                        <Typed
                            strings={['Re-password','Re-type your password','password','eg: Bb.dA@4as*as']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='password' name='re-password' placeholder='repeat password' value={rePassword} onChange={e => setRePassword(e.target.value)} required/>
                        </Typed>
                        <button ref={CreateButton}>Create Account</button>
                        <p>already have an account click <Link onClick={() => {
                                create.current.style.display = 'none'
                                login.current.style.display = 'block'
                            }}>here</Link></p>
                    </form>
                </div>
                <div className='login' ref={login}>
                    <h2>log in</h2>
                    <form method='post' onSubmit={loginSubmit}>
                        <Typed
                            strings={['Email','Enter your Email','Email address','eg: myemail@email.eme']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        </Typed>
                        <Typed
                            strings={['password','Enter your password','Strong password','eg: Bb.dA@4as*as']}
                            typeSpeed={80} backSpeed={50} attr="placeholder" loop>
                            <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                        </Typed>
                        <Link className='forget'>Forget password</Link>
                        <button type='submit' ref={LoginButton}>Log In</button>
                        <p>Doesn't have account click <Link onClick={() => {
                            create.current.style.display = 'block'
                            login.current.style.display = 'none'
                        }}>here</Link></p>
                    </form>
                </div>
            </Tilt>
        </main>     
    )
}

export default SignUp