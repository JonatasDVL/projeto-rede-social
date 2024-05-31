"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa"
import { TbMessageCircle2Filled } from "react-icons/tb";

export default function Header() {

  const [user, setUser] = useState({ username: "", userImg: "" })
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()


  useEffect(() => {
    let value = localStorage.getItem("rede-social:user")
    if (value) {
      setUser(JSON.parse(value));
    }
  }, [user])

  function logout(e: any) {
    e.preventDefault()
    localStorage.removeItem("rede-social:token")
    localStorage.removeItem("rede-social:user")
    router.push("/login")
  }

  return (
    <header className="w-full flex justify-between items-center py-2 px-4 bg-white shadow-md">
      <Link className="font-bold text-sky-900 text-lg" href="/">VITALBOOK</Link>
      <div className="flex items-center py-1 px-3 bg-zinc-100 rounded-full text-gray-600">
        <input className="bg-zinc-100 focus:outline-none" type="text" placeholder="Pesquisar" />
        <FaSearch />
      </div>
      <div className="flex items-center gap-3 text-gray-600">
        <div className="flex gap-3">
          <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300"> <TbMessageCircle2Filled /> </button>
          <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300"> <FaBell /> </button>
        </div>
        <div className="relative" onMouseLeave={() => setShowMenu(false)}>
          <button className="flex flex-row gap-3 items-center" onClick={() => setShowMenu(!showMenu)}>
            <img className="w-8 rounded-full" src={user && user.userImg ? user.userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem de perfil" />
            <span className="font-bold text-sm">{user.username}</span>
          </button>
          {showMenu && (
            <div className="absolute flex flex-col bg-white p-2 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-8px]">
              <Link href="" className="hover:text-gray-800 hover:bg-zinc-200 rounded-lg px-2 py-1">Editar perfil</Link>
              <Link href="" className="hover:text-gray-800 hover:bg-zinc-200 rounded-lg px-2 py-1" onClick={(e) => logout(e)}>Sair</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
