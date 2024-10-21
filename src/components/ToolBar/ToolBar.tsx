import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
      <nav className="navbar bg-dark">
        <div className="container">
          <div className='w-100 row rows-cols-2 justify-content-between align-items-center'>
            <div><NavLink to={'/'}><span className="navbar-brand mb-0 text-white fs-1">Uber Eats</span></NavLink></div>
            <div className="ms-auto">
              <nav className="navbar navbar-nav row row-cols-2">
                <li>
                  <NavLink className="text-white" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="text-white" to="/newDish">New Dish</NavLink>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default ToolBar;
