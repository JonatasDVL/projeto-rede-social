"use client"
import AuthInput from "@/components/AuthInput"
import AuthPanel from "@/app/(auth)/layout"
import Link from "next/link"
import { useState } from "react"
import { makeRequest } from "../../../../axios"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')

  const router = useRouter()

  function handleLogin(e: any) {
    e.preventDefault() // ao submeter, não faz reload
    makeRequest.post("auth/login", { email, password })
      .then((res) => {
        localStorage.setItem("rede-social:user", JSON.stringify(res.data.data.user))
        localStorage.setItem("rede-social:token", JSON.stringify(res.data.data.token))
        setSucess(res.data.msg)
        setError("")
        router.push("/")
      })
      .catch((err) => {
        console.log(err)
        setError(err.response.data.msg)
        setSucess("")
      })
  }

  return (
    <>
      <h1 className="font-bold text-2xl">LOGIN</h1>

      <AuthInput newState={setEmail} label="Email" id="email" type="text" />
      <AuthInput newState={setPassword} label="Password" id="password" type="password" />

      {error.length > 0 && <span className="text-red-600">* {error} </span>}
      {sucess.length > 0 && <span className="text-green-600">* {sucess} </span>}

      <button className="py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-800"
        onClick={(e) => handleLogin(e)}>ENTRAR</button>

      <Link href="/register" className="text-center underline hover:text-gray-800">Cadastrar-se</Link>
    </ >
  )
}