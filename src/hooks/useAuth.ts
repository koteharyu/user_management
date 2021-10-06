import { useCallback, useState } from "react"
import { User } from '../types/api/user'
import axios from "axios"
import { useHistory } from "react-router-dom"

export const useAuth = () => {


  const history = useHistory()
  const [loading, setLoading] = useState<boolean>(false)
  const login = useCallback((id: string) => {

    setLoading(true)

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (res.data) {
          history.push("/home")
        } else {
          alert("not existing")
        }
      })
      .catch(() => alert("can not login"))
  }, [history])
  return { login, loading }
}
