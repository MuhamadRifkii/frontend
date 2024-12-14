/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Profile from "../Cards/Profile";
import Searchbar from "../Searchbar/Searchbar";
import { useDispatch } from "react-redux";
import { resetForm } from "../../store/actions/login.action";

export default function Navbar({ userInfo, setFilter, filterValue }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetForm());
    localStorage.clear();
    navigate("/login");
  };

  const onClearSearch = () => {
    setFilter("");
  };

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Catat Cuy</h2>

      {userInfo && (
        <Searchbar
          value={filterValue}
          onChange={(e) => setFilter(e.target.value)}
          onClearSearch={onClearSearch}
        />
      )}

      <Profile userInfo={userInfo} logout={logout} />
    </div>
  );
}
