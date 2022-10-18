import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Hoc = ({children}) => {
    let {auth} = useSelector((state)=>state)
    console.log(auth,"auth")
 if(auth){
    return children
 }else{
    return <Navigate to = "/"></Navigate>
 }
}

export default Hoc
