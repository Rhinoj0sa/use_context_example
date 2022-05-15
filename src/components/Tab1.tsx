import { useGlobalContext } from "./MyGlobalContext";
import MyProfile from "./MyProfile";
const Tab1 = () => {
  const { copy, setCopy, risk, setRisk } = useGlobalContext();
  return (
    <>
      <h2>Tab1</h2>
      <h3>Context: copy: {copy} risk: {risk} </h3>
      <h3>Context: risk: {risk} </h3>
      <button
        onClick={() => {
          setRisk(`risk changed at ${Date.now().toString()}`);
        }}
      >
        Change the risk
      </button>
      <MyProfile />
    </>
  );
};
export default Tab1;
