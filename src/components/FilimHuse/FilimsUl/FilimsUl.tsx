import { Filim } from "../../../type";
import FilimLi from "./FilimLi/FilimLi";
import { FilimUlCom } from "./styles";

interface Props {
  filims: Filim[];
  favoriFilims: Filim[];
  setFavoriFilims: (value: Filim[]) => void;
}

const FilimUl: React.FC<Props> = (props: Props) => {
  return (
    <>
      <FilimUlCom>
        {props.filims.map((filim, i) => {
          return (
            <FilimLi
              key={i}
              setFavoriFilims={props.setFavoriFilims}
              filim={filim}
              favoriFilims={props.favoriFilims}
            />
          );
        })}
      </FilimUlCom>
    </>
  );
};

export default FilimUl;
