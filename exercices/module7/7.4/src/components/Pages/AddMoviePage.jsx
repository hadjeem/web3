import { useNavigate, useOutletContext } from "react-router-dom";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";

const AddMoviePage = () => {
  const navigate = useNavigate();
  const { onMovieAdded } = useOutletContext();

  const handleMovieAdded = (newMovie) => {
    onMovieAdded(newMovie);
    navigate("/movies");
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <AddMovieForm onMovieAdded={handleMovieAdded} />
    </div>
  );
};

export default AddMoviePage;