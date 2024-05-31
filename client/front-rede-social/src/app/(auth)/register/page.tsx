"use client"
import AuthInput from "@/components/AuthInput"
import AuthPanel from "@/app/(auth)/layout"
import Link from "next/link"
import { useState } from "react"
import { makeRequest } from "../../../../axios"

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')


  // As variáveis usadas aqui devem ter os mesmos nomes que as esperadas pelo backend. Isso garante que os dados enviados pelo formulário sejam reconhecidos e processados corretamente no servidor.

  function handleRegister(e: any) {
    e.preventDefault() 
    makeRequest.post("auth/register", { username, email, password, confirmPassword })
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
    <>
      <h1 className="font-bold text-2xl">REGISTER</h1>
      
      <AuthInput newState={setUsername} label="Nome de Usuário" id="username" type="text" />
      <AuthInput newState={setEmail} label="Email" id="email" type="text" />
      <AuthInput newState={setPassword} label="Senha" id="password" type="password" />
      <AuthInput newState={setConfirmPassword} label="Confirme sua Senha" id="confirmPassword" type="password" />

      {error.length > 0 && <span className="text-red-600">* {error} </span>}     
      {sucess.length > 0 && <span className="text-green-600">* {sucess} </span>}     

      <button className="py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800"
        onClick={(e) => handleRegister(e)}>CADASTRAR-SE</button>
      
      <Link href="/login" className="text-center underline hover:text-gray-800">Conecte-se</Link>
    </ >
  )
}