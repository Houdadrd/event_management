import React, { useState } from "react";
import './Signup.css';
import { Link } from 'react-router-dom';
//import validation from "./SignupValidation";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import video from './videos/video3.mp4';
import Axios from "axios";

function Signup(){
   
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [login, setLogin] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3000/Signup",{
            nom: nom,
            prenom: prenom,
            tel:telephone,
            email:login,
            motDePasse: motDePasse,
        }).then((response) => {
            console.log(response);
            if (response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("Compte crée avec succés");
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
            <p>
                <h1 className="msgRegister">{registerStatus}</h1>
            </p>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                <h3>Créer un compte</h3>
            </div>

                <form action="" className='form grid'>
                    <div className='inputDiv'>
                       <label name='nom' htmlFor="nom"><span>Nom</span></label>
                        <div className='input flex'>
                        <FaUserShield className='icon' />
                         <input type="text" placeholder='Entrer votre nom' 
                         onChange={(e) => {setNom(e.target.value)}}
                        />
                         
                        </div>
                    </div>
                    <div className='inputDiv'>
                       <label name='prenom' htmlFor="prenom"><span>Prenom</span></label>
                        <div className='input flex'>
                        <FaUserShield className='icon' />
                        <input type="text" placeholder='Entrer votre prenom'
                         onChange={(e) => {setPrenom(e.target.value)}}
                        />                    
                        </div>
                    </div>
                    <div className='inputDiv'>
                       <label name='telephone' htmlFor="telephone"><span>Téléphone</span></label>
                        <div className='input flex'>
                        <BsFillTelephoneFill className='icon'/>
                         <input type="text" placeholder='Entrer votre telephone'
                         onChange={(e) => {setTelephone(e.target.value)}}         
                         /> 
                        </div>
                    </div>

                    <div className='inputDiv'>
                       <label name='email' htmlFor="email"><span>Email</span></label>
                        <div className='input flex'>
                        <MdOutlineMarkEmailRead className='icon' />
                         <input type="email" placeholder='Entrer votre email'
                         onChange={(e) => {setLogin(e.target.value)}}                
                         />
                        </div>
                    </div>

                    <div className='inputDiv'>
                       <label name='password' htmlFor="password"><span>Mot de passe</span></label>
                        <div className='input flex'>
                        <BsFillShieldLockFill className='icon'/>
                        <input type="password" placeholder='Entrer votre mot de passe'
                         onChange={(e) => {setMotDePasse(e.target.value)}}                   
                        />
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={register}>
                        <span> S'inscrire</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <div className='footerDiv flex'>
                         <span className='text'>Vous avez déjà un compte?</span>
                        <Link to='/login'>
                           Se connecter
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    </div>    


);
};

export default Signup;