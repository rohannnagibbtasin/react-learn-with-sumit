import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/dashboard"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/login"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/service"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/posts/js"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}
                    >
                        Posts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
