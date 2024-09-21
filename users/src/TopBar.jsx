import { Link } from 'react-router-dom';


export default function TopBar() {
  const handleLinkClick = (e) => {
    // Remove the 'active-link' class from all links
    document.querySelectorAll('.li-topbar').forEach(link => {
      link.classList.remove('active-link');
    });

    // Add the 'active-link' class to the clicked link
    e.currentTarget.classList.add('active-link');
  };

  return (
    <div className="topbar-container-of-the-container">
      <h1 id="users-h1">Users</h1>
      <div className="topbar-container">
        <input type="text" className="search-input" placeholder="Search users" />
        <ul className="ul-topbar">
          <li>
            <Link
              to="/"
              className="li-topbar"
              onClick={handleLinkClick}
            >
              Reputation
            </Link>
          </li>
          <li>
            <Link
              to="/New-users"
              className="li-topbar"
              onClick={handleLinkClick}
            >
              New users
            </Link>
          </li>
          <li>
            <Link
              to="/voters"
              className="li-topbar"
              onClick={handleLinkClick}
            >
              Voters
            </Link>
          </li>
          <li>
            <Link
              to="/editors"
              className="li-topbar"
              onClick={handleLinkClick}
            >
              Editors
            </Link>
          </li>
          <li>
            <Link
              to="/moderators"
              className="li-topbar"
              onClick={handleLinkClick}
            >
              Moderators
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
