import { CiLink, CiLock, CiMail, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import google from '../assets/google.png'
import { useContext, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../provider/firebase.config";

const Register = () => {

    const [passValid, setPassValid] = useState(true)
    const handlePassword = (e) => {
        const validatePassword = (value) => {
            const regex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]{6,}$/;
            return regex.test(value);
          };
        const value = e.target.value;
        const target = e.target.parentNode;
      
        target.className =
          "flex items-center w-full  border   border-secondary";
        setPassValid(true);
    
        if (value.length > 0) {
          if (!validatePassword(value)) {
            target.className =
              "flex items-center w-full  border   border-accent/90";
            setPassValid(false);
          } else {
            target.className =
              "flex items-center w-full  border   border-secondary";
            setPassValid(true);
          }
        }
      };

      const [showHide, setShowHide] = useState(false)
      const showPass = () => {
            setShowHide(!showHide)
      }



    const {createAccount,signInWithGoogle} = useContext(ThemeContext)
    const handleForm = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
    

        createAccount(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL: photo
            })
            console.log(user)
            
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
        .then((userCredential) => {
            
            const user = userCredential.user;
         
            console.log(user)
            
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
            <h1 className="text-3xl pb-2 font-semibold">Create Your Account</h1>
            <p className="pb-8 text-sm text-neutral/40">Step into a world of unlimited entertainment!</p>
             <form onSubmit={handleForm} className="w-full text-sm relative ">

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
         <div className="flex items-center w-full  border   border-secondary">
         <CiUser className="text-lg mx-2" />
         <input
            type="text"
            name="name"

            placeholder="Enter your name"
            className='bg-transparent w-full pr-5 py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
            required
          />
         </div>
        </div>

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
         <div className="flex items-center w-full  border   border-secondary">
         <CiMail className="text-lg mx-2" />
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
            <span className="label-text">Photo URL</span>
          </label>
         <div className="flex items-center w-full  border   border-secondary">
         <CiLink className="text-lg mx-2" />
         <input
            type="text"
            name="photo"
           
            placeholder="Enter your profile photo URL"
            className='bg-transparent w-full pr-5 py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
            required
          />
         </div>
        </div>

        <div className="form-control pb-1">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="flex items-center w-full  border   border-secondary">
         <CiLock className="text-lg mx-2" />
         <input
            type={showHide ? 'text' : 'password'}
            name="password"
           onKeyUp={handlePassword}
            placeholder="Password"
            className='bg-transparent w-full  py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
            required
          />
         
          {showHide ? <VscEye onClick={showPass} className="mx-3 cursor-pointer text-lg"/> :
          <VscEyeClosed onClick={showPass} className="mx-3 cursor-pointer text-lg"/>}

          
         </div>
         {passValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Password must be at least one Uppercase, one Lowercase, no number and minimum 6 characters.</span>}
        </div>

        <div className="form-control pt-8">
          
         <button disabled={passValid ? false : true} className="btn bg-accent/90 rounded-none min-h-max h-max py-3 text-white border-none hover:bg-[#BEBEBE]">Create</button>
        </div>
        <p className="text-xs py-2 text-center">Already have an account? <Link className="font-semibold hover:text-accent/90" to='/login'>Login</Link></p>

      
             </form>
             <div className="divider">or</div>
             <div className="mx-auto w-max pt-4">
             <button onClick={openPopup} className="btn  px-10 btn-outline border-secondary rounded-none"><img className="w-5" src={google} alt="" /> Sign in with Google</button>
             </div>
            </section>
        </div>
    );
};

export default Register;