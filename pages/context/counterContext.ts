import { func, object } from "prop-types"
import { createContext } from "react"

const counterCountext = createContext({ 
    stateUser: false,
    userInt: () => {},
    userOut:()=>{},
    nameUser: "user",
    ChangeUser: (name:string)=>{},
    email: "email",
    ChangeEmail: (email:string)=>{}

})

export default counterCountext