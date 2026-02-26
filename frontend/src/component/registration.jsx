// // import React, { useState } from "react";

// // function Register(){
// //     const [userName, setUserName] = useState('');
// //     const [userPassword, setUserPassword] = useState('');
// //     const [userEmail, setUserEmail] = useState('');

// //     async function studentRegister(e){
// //         e.preventDefault();
// //         try{
// //             const response = await fetch('http://localhost:4002/register',{
// //                 method: 'POST',
// //                 body: JSON.stringify({ name: userName, email: userEmail, password: userPassword }),
// //                 headers: { 'Content-Type': 'application/json' }
// //             });
// //             const jsonResponse = await response.json();
// //             alert(jsonResponse.msg);
// //         }catch(err){
// //             alert(err.message || err);
// //         }
// //     }
// //     return (
// //         <div>
// //             <h2></h2>
// //             <form onSubmit={studentRegister}>
// //                 <div className="form-group">
// //                     <label htmlFor="nameInput">Enter Name</label>
// //                     <input type="text" onChange={(e)=> setUserName(e.target.value)} className="form-control" id="nameInput" placeholder="Enter name"/>
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="emailInput">Email address</label>
// //                     <input type="email" onChange={(e)=> setUserEmail(e.target.value)} className="form-control" id="emailInput" placeholder="Enter email"/>
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="passwordInput">Password</label>
// //                     <input type="password" onChange={(e)=> setUserPassword(e.target.value)} className="form-control" id="passwordInput" placeholder="Password"/>
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Submit</button>
// //             </form>
// //         </div>
// //     )
// // }

// // export default Register;


// import React, { useState } from 'react'

// function Registration() {
//     const[userName,setUserName]=useState();
//     const[userPassword,setUserPassword]=useState()
//     const[userEmail,setUserEmail]=useState()

//      async function studentRegistration(e){
//         e.preventDefault();
//         // alert(userName+userPassword+userEmail)

//         try{
//               const response=await fetch('http://localhost:4002/register',{
//                 method:'POST',
//                 body:JSON.stringify({userName,userPassword,userEmail}),
//                 headers:{'Content-Type':'Application/json'}
//               })

//               const jsonResponse=await response.json();
//               alert(jsonResponse.msg)
//         }catch(e){
//             alert(e)
//         }
//      }

//   return (
//     <div>
//         <h2>Student Registration Form</h2>
//           <form>
//             <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Enter Name</label>
//     <input type="text" onChange={(e)=>setUserName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      
//       </div>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" onChange={(e)=>setUserEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" onChange={(e)=>setUserPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
//   </div>
  
//   <button type="submit" onClick={studentRegistration} class="btn btn-primary">Register</button>
// </form>
//     </div>
//   )
// }

// export default Registration;

import React, { useState } from 'react'

function Registration() {
    const[userName,setUserName]=useState();
    const[userPassword,setUserPassword]=useState()
    const[userEmail,setUserEmail]=useState()

     async function studentRegistration(e){
        e.preventDefault();
        // alert(userName+userPassword+userEmail)

        try{
              const response=await fetch('http://localhost:4002/register',{
                method:'POST',
                body:JSON.stringify({userName,userPassword,userEmail}),
                headers:{'Content-Type':'Application/json'}
              })

              const jsonResponse=await response.json();
              alert(jsonResponse.msg)
        }catch(e){
            alert(e)
        }
     }

  return (
    <div>
        <h2>Student Registration Form</h2>
          <form>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Name</label>
    <input type="text" onChange={(e)=>setUserName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      
      </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setUserEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setUserPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" onClick={studentRegistration} class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Registration