"use client"
import AuthInput from "@/components/AuthInput"
import AuthPanel from "@/components/AuthPage"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')

  function handleLogin(e: any) {
    e.preventDefault() // ao submeter, não faz reload
    axios.post("http://localhost:8001/api/auth/login", { email, password })
      .then((res) => {
        console.log(res.data)
        setSucess(res.data.msg)
        setError("")
      })
      .catch((err) => {
        console.log(err)
        setError(err.response.data.msg)
        setSucess("")
      })
  }

  return (
    <AuthPanel>
      <h1 className="font-bold text-2xl">LOGIN</h1>
      
      <AuthInput newState={setEmail} label="Email" id="email" type="text" />
      <AuthInput newState={setPassword} label="Password" id="password" type="password" />
      
      {error.length > 0 && <span className="text-red-600">* {error} </span>}     
      {sucess.length > 0 && <span className="text-green-600">* {sucess} </span>}     

      <button className="py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800"
        onClick={(e) => handleLogin(e)}>ENTRAR</button>
      
      <Link href="/register" className="text-center underline hover:text-gray-800">Cadastrar-se</Link>
    </AuthPanel >
  )
}