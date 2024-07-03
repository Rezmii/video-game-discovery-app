import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headingText}
    </Heading>
  );
};

export default GameHeading;
