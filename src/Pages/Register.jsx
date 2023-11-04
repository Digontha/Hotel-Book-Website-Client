import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const {createUser,googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (e) =>{

        e.preventDefault();
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name ,image, email, password);
   
   
         createUser(email, password,name, image)
         .then(res=>{
          console.log(res.user);
          swal("success", "Your account create successfully", "success");
          updateProfile(res.user, { displayName: name, photoURL: image })
                       .then(()=> {
                         
                       })
             e.target.reset()
             navigate("/")
         })
         .catch(()=>{
        
          swal("error", "something went wrong", "error");
         })
       
   
      
        
        
     }
     const handleGoogle=()=>{
        googleLogin()
        .then(()=>{
        
          swal("success", "Your account create successfully", "success");
        })
        .catch(()=>{
        
          swal("error", "something went wrong", "error");
        })
      }
    
       return (
         <>
           <div>
               <div className='flex flex-col justify-center items-center mt-10 lg:h-[70vh]'>
               <h1 className="text-2xl font-semibold py-3 mt-10">Register</h1>
                 <div className="card w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleRegister} className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Name</span>
                   </label>
                   <input type="text" placeholder="name" name="name" className="input input-bordered"  />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Image</span>
                   </label>
                   <input type="text" placeholder="Image URL" name="image" className="input input-bordered"  />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                   
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Register</button>
                 </div>
               </form>
               <Link className="text-center" to="/login"><p>Have a account? <span className="font-bold btn btn-link">login</span></p></Link>
               <div className="p-5">
               <button onClick={handleGoogle}  className="btn btn-sm btn-neutral w-full"><FcGoogle></FcGoogle> Google</button>
               </div>
             </div>
            
           </div>
           </div>
      
         </>
           
       );
};

export default Register;