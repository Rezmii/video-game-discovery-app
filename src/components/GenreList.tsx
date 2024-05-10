import useGenre from "../Hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <ul>
        {data.map((singleData) => (
          <li key={singleData.id}>{singleData.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
