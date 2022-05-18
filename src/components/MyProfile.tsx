import { useGlobalContext } from "./MyGlobalContext";
import { ColoredLine } from "./ColoredLine";

const MyProfile = () => {
  const { copy, risk } = useGlobalContext();
  return (
    <div>
      <hr />
      <ColoredLine />
      <h2> Profile component </h2>
      <h3>Copy: {copy}</h3>
      <h4>Risk: {risk}</h4>
    </div>
  );
};
export default MyProfile;
