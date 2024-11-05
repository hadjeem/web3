import { ProviderWrapper } from "../../contexts/countersContext";
import App from "./App.jsx";

const AppLoader = () => {
  return (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  );
};

export default AppLoader;