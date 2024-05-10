import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
