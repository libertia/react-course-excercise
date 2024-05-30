import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (<>
    <nav>
      <ul>
        <li>
          <Link to="/">Excercise1</Link>
        </li>
        <li>
          <Link to="/state">Excercise2</Link>
        </li>
        <li>
          <Link to="/state2">Excercise3</Link>
        </li>
      </ul>
    </nav>
    <div className="App">
      <header className="App-header">
        <Outlet/>
      </header>
    </div>

  </>)
}

export default Layout