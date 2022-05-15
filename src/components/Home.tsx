import getCopy from "./Content";
import { useGlobalContext } from "./MyGlobalContext";
const Home = () => {
  const { copy } = useGlobalContext();
  return (
    <div>
    <hr />
      <h2>Home</h2>
      <h3>{copy}</h3>{" "}
      <h4>{getCopy(copy)}</h4>
    </div>
  );
};
export default Home;
