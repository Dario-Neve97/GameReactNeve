import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase";
import { SessionContext } from "../context/SessionContext";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    alert("Signed out");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid special-gothic-expanded-one-regular">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCentered"
          aria-controls="navbarCentered"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCentered"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none text-light nav-link">
                Home
              </Link>
            </li>
            {session ? (
              <li>
                <details>
                  <summary className="nav-link dropdown-toggle text-light">
                    Account {session?.user.user_metadata.first_name}
                    <i className="fa-solid fa-circle-user m-1 text-light"></i>
                  </summary>
                  <ul dir="rtl" className="p-0 dropdown dropdown-menu-start">
                    <li className="nav-link">
                      <Link
                        to="/account"
                        className="text-decoration-none text-light"
                      >
                        Account
                      </Link>
                    </li>
                    <li className="nav-link">
                      <Link
                        to="/favourites"
                        className="text-decoration-none text-light"
                      >
                        Preferiti
                      </Link>
                    </li>
                    <li className="nav-link">
                      <button
                        onClick={signOut}
                        className="btn btn-danger btn-sm"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active text-light">
                    Registrati
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link active text-light">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
