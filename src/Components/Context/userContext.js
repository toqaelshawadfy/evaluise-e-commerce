// import { createContext,useState , useEffect } from "react";


// export let userContext = createContext();

// export default function UserContextProvider({children}){

//     const [userToken , setUserToken] = useState(null)

//     useEffect(()=>{
//         if(localStorage.getItem('token'))
//             setUserToken(localStorage.getItem("token"))

//     },[]);

//     return <UserContextProvider valu={{userToken ,setUserToken}}>
//           {children}
//      </UserContextProvider>
// }