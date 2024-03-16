import React , { useState }from 'react';
import './login.css';
import { Link } from 'react-router-dom';
//import validation from './LoginValidation';
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import video from './videos/video3.mp4';
import Axios from "axios";


function Login(){

    const [logins, setLogins] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3000/login",{
            login:logins,
            motDePasse: motDePasse,
        }).then((response) => {
            console.log(response);
            if (response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus(response.data[0].message);
            }
        })
    }

    return(
        <div className='loginPage flex'>
            <div className='container flex'>

                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    <div className='textDiv'>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                    <h3>Welcome Back!</h3>
                </div>
                <p>
                  <h1 className="msgRegister">{loginStatus}</h1>
                 </p>    
                    <form action="" className='form grid'>
                        <span className='showMessage'> Login status will go here</span>
                        <div className='inputDiv'>
                           <label name='email' htmlFor="email"><span>Login</span></label>
                            <div className='input flex'>
                             <FaUserShield className='icon' />
                             <input type="email" placeholder='Entrer votre login'  
                             onChange={(e) => {setLogins(e.target.value)}}
                             required />
                            </div>
                        </div>

                        <div className='inputDiv'>
                           <label name='password' htmlFor="password"><span>Mot de passe</span></label>
                            <div className='input flex'>
                            <BsFillShieldLockFill className='icon' />
                             <input type="password" placeholder='Entrer votre mot de passe' 
                              onChange={(e) => {setMotDePasse(e.target.value)}}                   
                              required/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={login}>
                            <Link to='/Home' className='btn'>
                             Se connecter
                            </Link> 
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <div className='footerDiv flex'>
                         <span className='text'>Vous n'avez pas un compte?</span>
                            <Link to='/Signup' className='btn'>
                                S'inscrire
                            </Link>
                        </div>

                        
                        <span className='forgotPassword'>
                            Vous avez oublié votre mot de passe?
                            <a href='#3'>Click here</a> 
                        </span>

                    </form>
                </div>
            </div>
        </div>    

    
    )
}
export default Login;
 