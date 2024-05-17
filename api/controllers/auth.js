import { db } from "../connect.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const register = (req, res) => {
  const { username, email, password, confirmPassword } = req.body

  if (!username) {
    return res.status(422).json({ msg: "O nome é obrigatório!" })
  } else if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" })
  } else if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória!" })
  } else if (password != confirmPassword) {
    return res.status(422).json({ msg: "A senha e a confirmação da senha tem que ser a mesma!" })
  } else {
    db.query("SELECT email FROM user WHERE email = ?", [email], async (error, data) => {
      if (error) {
        console.log(error)
        return res.status(500).json({ msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!!" })
      } else if (data.length > 0) {
        return res.status(500).json({ msg: "Este email já está sendo utilizado!" })
      } else {
        const passwordHash = await bcrypt.hash(password, 8)
        db.query("INSERT INTO user SET ?", { username, email, password: passwordHash }, (error) => {
          if (error) {
            console.log(error)
            return res.status(500).json({ msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!" })
          } else {
            return res.status(200).json({ msg: "Cadastro efetuado com sucesso!" })
          }
        })
      }
    })
  }
}

export const login = (req, res) => {
  const { email, password } = req.body

  db.query("SELECT * FROM user WHERE email = ?", [email], async (error, data) => {
    if (error) {
      console.log(error)
      return res.status(500).json({ msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!!" })
    } else if (data.length == 0) {
      return res.status(404).json({ msg: "Email não encontrado!!" })
    } else {
      const user = data[0]
      const checkPassord = await bcrypt.compare(password, user.password)
      if (!checkPassord) {
        return res.status(422).json({ msg: "A senha incorreta!" })
      } else {
        try {
          const refreshToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 24,
            id: user.password
          },
            process.env.REFRESH,
            { algorithm: "HS256" })
          const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 24,
            id: user.password
          },
            process.env.TOKEN,
            { algorithm: "HS256" })
          res.status(200).json({ msg: "Usuário logado com sucesso!", token, refreshToken })
        } catch (err) {
          console.log(err)
          return res.status(500).json({ msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!!" })
        }
      }
    }
  })
}

