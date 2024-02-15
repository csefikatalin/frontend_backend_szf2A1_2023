import { Link } from "react-router-dom";
export default function NavigationAuth() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
               
            </ul>
            </div>
        </nav>
    );
}
