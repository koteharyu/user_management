import { useCallback, useState } from "react"
import { User } from '../types/api/user'
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useAuth = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()
  const { showMessage } = useMessage()

  const login = useCallback((id: string) => {

    setLoading(true)

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (res.data) {
          showMessage({ title: "logged in", status: "success" })
          history.push("/home")
        } else {
          showMessage({ title: "faild to login", status: "warning" })
          setLoading(false)
        }
      })
      .catch(() => {
        showMessage({ title: "Error", status: "error" })
        setLoading(false)
      })
  }, [history, showMessage])
return { login, loading }
}
