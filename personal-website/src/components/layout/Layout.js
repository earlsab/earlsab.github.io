import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import BottomCredits from "./BottomCredits";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <BottomCredits />
    </div>
  );
}

export default Layout;
