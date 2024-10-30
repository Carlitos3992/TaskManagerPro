import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>TaskManagerPro</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/report">Report</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
