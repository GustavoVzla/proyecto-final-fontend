import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { activateAccount } from "../../api/api";

const Activation = () => {
  const { activationCode } = useParams();
  const history = useHistory();

  useEffect(() => {
    const activateUser = async () => {
      try {
        await activateAccount(activationCode);

        history.push("/login");
      } catch (error) {
        console.error(error);
      }
    };

    activateUser();
  }, [activationCode, history]);

  return (
    <div>
      <h2>Activation</h2>
      <p>Activating your account...</p>
    </div>
  );
};

export default Activation;
