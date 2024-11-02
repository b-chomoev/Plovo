import { NavLink } from 'react-router-dom';
import './ToolBar.css';

const ToolBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
            <NavLink to='/' className='text-decoration-none'><span className="nnavbar-brand mb-0 text-white fs-1">Plovo</span></NavLink>

            <div className="ms-auto">
              <ul className="navbar-nav">
                <li className='nav-item'>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className='nav-item text-white'>
                  <NavLink className="nav-link" to="/newDish">New Dish</NavLink>
                </li>
              </ul>
            </div>
        </div>
      </nav>
  );
};

export default ToolBar;
