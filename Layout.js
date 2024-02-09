import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/app/home">Home</Link>
          </li>
          <li>
            <Link to="/app/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/app/contact">Contact</Link>
          </li>     
          <li>
            <Link to="/app/404">NoPage</Link>
          </li>      
        </ul>
      <Outlet />
    </>
  )
};

export default Layout;