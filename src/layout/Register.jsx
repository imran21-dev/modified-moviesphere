import { CiLink, CiLock, CiMail, CiUser } from "react-icons/ci";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import google from '../assets/google.png'
import { useContext, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ThemeContext } from "../context/AssetsContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../provider/firebase.config";
import { GridLoader } from "react-spinners";

const Register = () => {
    const {state} = useLocation()
      const navigate = useNavigate()
     const loading = useNavigation()
    const [passValid, setPassValid] = useState(true)
    const handlePassword = (e) => {
        const validatePassword = (value) => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
            return regex.test(value);
          };
        const value = e.target.value;
        const target = e.target.parentNode;
      
        target.className =
          "flex items-center w-full  border rounded-full border-secondary";
        setPassValid(true);
    
        if (value.length > 0) {
          if (!validatePassword(value)) {
            target.className =
              "flex items-center w-full  border rounded-full  border-accent/90";
            setPassValid(false);
          } else {
            target.className =
              "flex items-center w-full  border rounded-full  border-secondary";
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
        .then(() => {
            
            updateProfile(auth.currentUser, {
                displayName : name,
                photoURL: photo
            })
            .then(() => {
                if (state) {
                    navigate(state.visit)
                }else{
                    navigate('/')
                }
            })
            .catch(error => {
                const errorCode = error.code;
                Swal.fire({
                  icon: "error",
                  title: 'Failed !',
                  text: `${errorCode}`,
                  confirmButtonText: "Retry",
                  scrollbarPadding: false,
                  customClass: {
                    title: 'text-xl md:text-3xl font-bold ',
                    text: 'text-3xl',
                    popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
                    confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
                  },
               
                });
            })
           
            
          })
          .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
              icon: "error",
              title: 'Failed !',
              text: `${errorCode}`,
              confirmButtonText: "Retry",
              scrollbarPadding: false,
              customClass: {
                title: 'text-xl md:text-3xl font-bold ',
                text: 'text-3xl',
                popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
                confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
              },
           
            });
           
          });
          form.reset()
        
    }


    const openPopup = () => {
        signInWithGoogle()
        .then(() => {
            
            navigate('/')
            
          })
          .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
              icon: "error",
              title: 'Failed !',
              text: `${errorCode}`,
              confirmButtonText: "Retry",
              scrollbarPadding: false,
              customClass: {
                title: 'text-xl md:text-3xl font-bold ',
                text: 'text-3xl',
                popup: "bg-[#1d0602] text-white rounded-3xl outline outline-[#f12804]",
                confirmButton: "bg-[#f12804] rounded-full py-[10px] px-[30px]",
              },
           
            });
           
          });
        
    }

    return (
       <>
        {
         loading.state === 'loading' ?<div className="h-screen flex justify-center items-center"><GridLoader
         size={10}
         color="#bebebe"
        
         /></div> :  <div className="py-20 h-screen flex flex-col justify-center">
         <section className="w-4/12 mx-auto">
         <h1 className="text-3xl pb-2 font-semibold">Create Your Account</h1>
         <p className="pb-8 text-sm text-neutral/40">Step into a world of unlimited entertainment!</p>
          <form onSubmit={handleForm} className="w-full text-sm relative ">

     <div className="form-control pb-1">
       <label className="label">
         <span className="label-text ">Name</span>
       </label>
      <div className="flex items-center w-full border rounded-full -ml-1 border-secondary">
      <CiUser className="text-lg mx-3" />
      <input
         type="text"
         name="name"

         placeholder="Enter your name"
         className='bg-transparent  w-full pr-5 py-2 focus:outline-none placeholder:text-neutral/30  placeholder:font-thin'
         required
       />
      </div>
     </div>

     <div className="form-control pb-1">
       <label className="label">
         <span className="label-text ">Email</span>
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
         <span className="label-text ">Photo URL</span>
       </label>
      <div className="flex items-center w-full  border rounded-full -ml-1 border-secondary">
      <CiLink className="text-lg mx-3" />
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
         <span className="label-text ">Password</span>
       </label>
      <div className="flex items-center w-full  border rounded-full -ml-1 border-secondary">
      <CiLock className="text-lg mx-3" />
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
      {passValid ? '': <span className="text-accent/90 text-left text-xs pt-1">Password must be at least one Uppercase, one Lowercase and minimum 6 character.</span>}
     </div>

     <div className="form-control pt-8">
       
      <button disabled={passValid ? false : true} className="btn -ml-1 bg-accent/90 rounded-full min-h-max h-max py-3 text-white border-none hover:bg-[#BEBEBE]">Create</button>
     </div>
     <p className="text-xs py-2 text-center">Already have an account? <Link className="font-semibold hover:text-accent/90" state={state ? state : null} to='/login'>Login</Link></p>

   
          </form>
          <div className="divider">or</div>
          <div className="mx-auto w-max pt-4">
          <button onClick={openPopup} className="btn  px-10 btn-outline border-secondary rounded-full"><img className="w-5" src={google} alt="" /> Sign in with Google</button>
          </div>
         </section>
     </div>
        }
       
       </>
    );
};

export default Register;