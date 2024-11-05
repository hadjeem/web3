import { ProviderWrapper } from "../../contexts/opinionsContext";
import App from "./App";

const AppLoader = () => {
  return (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  );
};

export default AppLoader;