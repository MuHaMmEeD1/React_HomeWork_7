import axios from "axios";
import { useEffect, useState } from "react";
import { Filim } from "../../type";
import FilimUl from "./FilimsUl/FilimsUl";
import FilimForm from "./FilimForm/FilimForm";
import { ButtonsDiv } from "./styles";

const FilimHouse = () => {
  const [fimims, setFilims] = useState<Filim[]>([]);
  const [filimName, setFilimName] = useState("");
  const [filimType, setFilimType] = useState("");
  const [filimPage, setFilimPage] = useState(1);
  const [favoriFilims, setFavoriFilims] = useState<Filim[]>([]);
  const [favored, setFavored] = useState(false);

  const getFilims = async () => {
    let responce = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "d9c93346",
        s: filimName == "" ? "Batman" : filimName,
        type: filimType == "" ? "movie" : filimType,
        page: filimPage,
      },
    });

    if (responce.data.Error) {
      responce = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "d9c93346",
          t: filimName == "" ? "Batman" : filimName,
          type: filimType == "" ? "movie" : filimType,
          page: filimPage,
        },
      });

      const filim: Filim = {
        Title: responce.data.Titel,
        Type: responce.data.Type,
        Poster: responce.data.Poster,
        Year: responce.data.Year,
        imdbID: responce.data.imdbID,
      };

      if (favored) {
        setFilims(favoriFilims);
      } else {
        setFilims([filim]);
      }
    } else {
      if (favored) {
        setFilims(favoriFilims);
      } else {
        setFilims(responce.data.Search);
      }
    }
    console.dir(responce);
  };

  const beforePage = () => {
    if (filimPage != 1) {
      setFilimPage(filimPage - 1);
    }
  };
  const nextPage = () => {
    setFilimPage(filimPage + 1);
  };

  useEffect(() => {
    getFilims();
  }, [filimName, filimType, filimPage, favored]);

  return (
    <>
      <FilimForm
        setFavored={setFavored}
        setFilimName={setFilimName}
        setFilimType={setFilimType}
      />
      <FilimUl
        favoriFilims={favoriFilims}
        setFavoriFilims={setFavoriFilims}
        filims={fimims}
      />
      <ButtonsDiv>
        <button onClick={beforePage}>{"<<<"}</button>
        <button onClick={nextPage}>{">>>"}</button>
      </ButtonsDiv>
    </>
  );
};

export default FilimHouse;
