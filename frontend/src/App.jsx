// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Main from './component/Main'
// import Login from './component/Login'
// import Register from './component/Register'
// import Dashboard from './component/Dashboard'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   const[data,setData]=useState([]);
//   const[loading,setLoading]=useState(false);
//   // async function getFetchData(){
//   //   try{
//   //    setLoading(true)
//   //    const serverData=await fetch('http://localhost:4002/data');
//   //         const jsonData=await serverData.json();
//   //         setData(jsonData.msg);
//   //   }catch(e){
//   //     console.log(e);
//   //   }
//   //   finally{
//   //     setLoading(false);
//   //   }
//   // }

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Main />}/>
//       <Route path='/login' element={<Login />}/>
//       <Route path='/register' element={<Register />}/>
//       <Route path='/dashboard' element={<Dashboard />}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//     // <>
//      /*{ <h2>Welcome to Node Fetch API</h2>  }
//      {{
//       data.map((ele)=>(
//         <div>
//           <img src={ele.image} height={200} width={200} />
//           <h2>{ele.id}:{ele.title}</h2>
//           <h3>{ele.price}</h3>
//         </div>
//       ))
//      } }*/
//       /*{ <div className="products-grid">
//       {data.map((ele) => (
//       <div key={ele.id} className="product-item">
//       <img src={ele.image} height={200} width={200} alt={ele.title} />
//       <h2>{ele.id}: {ele.title}</h2>
//       <h3>${ele.price}</h3>
//       <button onClick={() => addToCart(ele)}>Add to Cart</button>
//       </div>
//       ))}
// </div>
//      {
//       !loading?(<h2>Data is loading....</h2>):(<></>)
//      }

//      {JSON.stringify(data)}
//      <button onClick={getFetchData}>fetchdata</button> }*/
//     // </>
//   )
// }

// export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './component/Main'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App