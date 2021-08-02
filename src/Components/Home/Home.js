import expresso from "../../img/expresso.jpg";
import s from "./Home.module.css";

const Home = () => (
  <img src={expresso} alt="logo cafe Expresso" className={s.logo} />
);

export default Home;
