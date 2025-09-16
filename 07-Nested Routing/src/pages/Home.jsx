import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Welcome To The Home</h1>
        <Link to="/users">Go to Users</Link>
    </div>
  )
}

export default Home