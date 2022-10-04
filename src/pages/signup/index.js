import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <div>
                <div className='create' ref={create}>
                    <h2>Create Account</h2>
                    <form method='post' onSubmit={CreateSubmit}>
                        <input type='test' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/>
                        <input type='test' name='username' placeholder='Username' value={userName} onChange={e => setUserName(e.target.value)} required/>
                        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                        <input type='password' name='re-password' placeholder='repeat password' value={rePassword} onChange={e => setRePassword(e.target.value)} required/>
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
                        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                        <Link className='forget'>Forget password</Link>
                        <button type='submit' ref={LoginButton}>Log In</button>
                        <p>Doesn't have account click <Link onClick={() => {
                                create.current.style.display = 'block'
                                login.current.style.display = 'none'
                            }}>here</Link></p>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default SignUp