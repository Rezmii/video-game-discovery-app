import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../Hooks/usePlatforms";
import useGenres from "../Hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
