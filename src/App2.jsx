import { useState, useEffect } from "react";
import './App.css'

const max = 10;
const App = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);

  const prevHandler = () => {
    if (id >= 1) {
      setId(id - 1)
    }
  }
  const nextHandler = () => {
    if (id < max) {
      setId(id + 1)
    }
  }
  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false))
  }, [id])
  return (
    <div>
      <h1>User Details - {id}</h1>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          phone: {user.phone}
        </div>
      )}
      <div>
        <button disabled={id == 1} onClick={prevHandler}>Previous</button>
        <button disabled={id == max} onClick={nextHandler}>Next</button>

      </div>
    </div>
  )
}
export default App;