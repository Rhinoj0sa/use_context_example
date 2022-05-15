import { useGlobalContext } from "./MyGlobalContext";
const Home = () => {
  const { copy } = useGlobalContext();
  return (
    <div>
      <h2>Home</h2>
      <h3>{copy}</h3>{" "}
    </div>
  );
};
export default Home;
