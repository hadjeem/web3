import Layout from "components/Layout/Layout";
import CinemaPage from "components/Pages/CinemaPage";
import HomePage from "components/Pages/HomePage";
import MovieListPage from "components/Pages/MovieListPage";

const App = () => {
  return (
    <Layout>
      <HomePage />
      <CinemaPage />
      <MovieListPage />
    </Layout>
  );
};

export default App;