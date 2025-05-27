import { Link, NavLink, useNavigate } from 'react-router';
import { Shield, Search, User, LogOut, Zap, Users } from 'lucide-react';

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-0">
            <div className="container">
                <Link 
                    className="navbar-brand d-flex align-items-center gap-2" 
                    to="/"
                >
                    <Shield size={24} className="text-primary" />
                    <span className="gradient-text">Heroes App</span>
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav d-flex gap-1">
                        <NavLink 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                            } 
                            to="/marvel"
                        >
                            <Zap size={16} />
                            <span>Marvel</span>
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                            }  
                            to="/dc"
                        >
                            <Shield size={16} />
                            <span>DC</span>
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                            }  
                            to="/search"
                        >
                            <Search size={16} />
                            <span>Search</span>
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <div className="navbar-nav d-flex align-items-center gap-2">
                        <span className="nav-item nav-link text-primary d-flex align-items-center gap-2">
                            <User size={16} />
                            <span>Luis</span>
                        </span>

                        <button
                            className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                            onClick={onLogout}
                        >
                            <LogOut size={14} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}