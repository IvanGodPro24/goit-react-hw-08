import "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
