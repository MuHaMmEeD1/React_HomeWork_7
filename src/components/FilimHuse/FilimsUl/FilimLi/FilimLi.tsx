import React, { useEffect } from "react";
import { Filim } from "../../../../type";
import { FilimLiCom } from "./styles";

import defaultImg from "../../../../assets/Default.png";

interface Props {
  filim: Filim;
  favoriFilims: Filim[];
  setFavoriFilims: (value: Filim[]) => void;
}

const FilimLi: React.FC<Props> = (props: Props) => {
  const onClickAddFF = () => {
    let checkAdd = true;

    props.favoriFilims.forEach((f) => {
      if (f.imdbID == props.filim.imdbID) {
        checkAdd = false;
      }
    });

    if (checkAdd) {
      props.setFavoriFilims([...props.favoriFilims, props.filim]);
    }
  };

  useEffect(() => {
    console.log("render");
  });

  return (
    <FilimLiCom>
      <img
        src={props.filim.Poster !== "N/A" ? props.filim.Poster : defaultImg}
        alt="poster"
      />
      <div>
        <div>
          <p>{props.filim.Title}</p>
          <p>{props.filim.Type}</p>
        </div>
        <div>
          <p>{props.filim.Year}</p>
          <button onClick={onClickAddFF}>Add Favor</button>
        </div>
      </div>
    </FilimLiCom>
  );
};

export default FilimLi;
