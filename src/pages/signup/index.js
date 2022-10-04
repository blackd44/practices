import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const SignUp = (props) => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [userName, setUserName] = useState('')

    let create = useRef()
    let login = useRef()
    let CreateButton = useRef()
    let LoginButton = useRef()

    return (
        <main className='signup'>
            <div>
                <div className='create' ref={create}>
                    <h2>Create Account</h2>
                    <form>
                        <input type='test' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                        <input type='test' name='username' placeholder='Username' value={userName} onChange={e => setUserName(e.target.value)} />
                        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                        <button ref={CreateButton}>Create Account</button>
                        <p>already have an account click <Link onClick={() => {
                                create.current.style.display = 'none'
                                login.current.style.display = 'block'
                            }}>here</Link></p>
                    </form>
                </div>
                <div className='login' ref={login}>
                    <h2>log in</h2>
                    <form>
                        <input type='email' name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <Link className='forget'>Forget password</Link>
                        <button ref={LoginButton}>Create Account</button>
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