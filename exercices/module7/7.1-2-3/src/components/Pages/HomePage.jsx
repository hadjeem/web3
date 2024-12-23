import { useOutletContext, Link } from "react-router-dom";

const HomePage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;