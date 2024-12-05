import { CiLock, CiMail,} from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from '../assets/google.png'
import { useContext, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";


const Login = () => {
      const {state} = useLocation()
      const navigate = useNavigate()
      
      const [showHide, setShowHide] = useState(false)
      const showPass = () => {
            setShowHide(!showHide)
      }



    const {loginAccount,signInWithGoogle} = useContext(ThemeContext)
    const handleForm = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
    

        loginAccount(email, password)
        .then(() => {
            
            if (state) {
                navigate(state.visit)
            }else{
                navigate('/')
            }
            
            
          })
          .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                title: "Failed !",
                text: `${errorCode}`,
                icon: "error",
                confirmButtonText: 'Retry'

              });
           
          });
          form.reset()
        
    }


    const openPopup = () => {
        signInWithGoogle()
        .then(() => {
            
            if (state) {
                navigate(state.visit)
            }else{
                navigate('/')
            }
            
          })
          .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                title: "Failed !",
                text: `${errorCode}`,
                icon: "error",
                confirmButtonText: 'Retry'

              });
           
          });
        
    }

    return (
        <div className="py-20 h-screen flex flex-col justify-center">
            <section className="w-4/12 mx-auto">
            <h1 className="text-3xl pb-2 font-semibold">Welcome Back!</h1>
            <p className="pb-8 text-sm text-neutral/40">Login and continue your cinematic journey!</p>
             <form onSubmit={handleForm} className="w-full text-sm relative ">

      

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
         <div className="flex items-center w-full  border rounded-full -ml-1 border-secondary">
         <CiMail className="text-lg mx-3" />
         <input
            type="email"
            name="email"
           
            placeholder="Enter your email"
            className='bg-transparent w-full pr-5 py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
            required
          />
         </div>
        </div>

      

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="flex items-center w-full  border rounded-full -ml-1 border-secondary">
         <CiLock className="text-lg mx-3" />
         <input
            type={showHide ? 'text' : 'password'}
            name="password"
           
            placeholder="Password"
            className='bg-transparent w-full  py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
            required
          />
         
          {showHide ? <VscEye onClick={showPass} className="mx-3 cursor-pointer text-lg"/> :
          <VscEyeClosed onClick={showPass} className="mx-3 cursor-pointer text-lg"/>}

          
         </div>
         <Link className="text-neutral/30 text-xs pt-1 hover:underline">Forgot password?</Link>
        </div>

        <div className="form-control pt-8">
          
         <button  className="btn -ml-1 bg-accent/90 rounded-full min-h-max h-max py-3 text-white border-none hover:bg-[#BEBEBE]">Login</button>
        </div>
        <p className="text-xs py-2 text-center">Do not have an account? <Link className="font-semibold hover:text-accent/90" state={state ? state : null} to='/register'>Register</Link></p>

      
             </form>
             <div className="divider">or</div>
             <div className="mx-auto w-max pt-4">
             <button onClick={openPopup} className="btn  px-10 btn-outline border-secondary rounded-full"><img className="w-5" src={google} alt="" /> Sign in with Google</button>
             </div>
            </section>
        </div>
    );
};

export default Login;