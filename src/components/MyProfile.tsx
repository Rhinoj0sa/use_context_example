import { useGlobalContext } from "./MyGlobalContext";

const MyProfile = () => {
  const { copy } = useGlobalContext();
  return (
    <div>
      <h2> Profile</h2>
      <h3>{copy}</h3>
    </div>
  );
};
export default MyProfile;
