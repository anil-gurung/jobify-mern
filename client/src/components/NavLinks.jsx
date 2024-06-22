import { useDashboardContext } from '../pages/Dashboard';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
const NavLinks = () => {
  const { user, toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === 'admin' && role !== 'admin') return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
