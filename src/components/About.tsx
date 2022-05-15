import { useGlobalContext } from "./MyGlobalContext";
import MyProfile from "./MyProfile";
const About = () => {
  const { copy, setCopy, risk, setRisk } = useGlobalContext();
  return (
    <>
      <hr />
      <h2>About component</h2>
      <h3>
        Context: copy: {copy} risk: {risk}{" "}
      </h3>
      <h3>Context: risk: {risk} </h3>
      <button
        onClick={() => {
          setCopy(`context changed by About at ${Date.now()}`);
          //   setRisk(`risk changed at ${Date.now().toString()}`);
        }}
      >
        Change the copy value
      </button>
      <MyProfile />
    </>
  );
};
export default About;
