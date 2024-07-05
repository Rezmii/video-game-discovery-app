import { Heading } from "@chakra-ui/react";
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
