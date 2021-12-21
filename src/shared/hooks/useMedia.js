import { useMediaQuery } from "react-responsive";
const useMedia = () => {
  const MOB = useMediaQuery({ query: "(max-width: 717px)" });
  const TABL = useMediaQuery({ query: "(min-width: 718px)" });
  const DESK = useMediaQuery({ query: "(min-width: 1200px)" });
  return { MOB, TABL, DESK };
};

export default useMedia;
