import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import ErrorPage from "../Error/Error";
import GenrePage from "../pages/genrepage/Genrepage"
import GamePage from "../pages/gamepage/GamePage";
import SearchPage from "../pages/searchpage/Searchpage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AccountPage from "../pages/account/Account";
import ProfilePage from "../pages/profile/profile";
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/games/:genre" element={<GenrePage />} />
          <Route path="/games/:slug/:id" element={<GamePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="/favourites" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
