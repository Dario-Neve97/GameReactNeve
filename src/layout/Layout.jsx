import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";

export default function Layout() {
  return (
    <div className="style-layout-system">
      <Navbar />
      <Header />

      <div className="container-fluid">
        <div className="row text-center p-4 gap-5 justify-content-center">
          <div className="style-sidebar-filters  col-md-3">
            <Sidebar />
          <div className="style-searchbar-filter">
            <SearchBar />
          </div>
          </div>

          <div className="style-main-content col-12 col-md-7">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
