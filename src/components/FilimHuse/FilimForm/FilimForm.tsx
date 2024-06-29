import React, { ChangeEvent, FormEvent, useState } from "react";
import { FilimFormCom } from "./styles";

interface Props {
  setFilimType: (value: string) => void;
  setFilimName: (value: string) => void;
  setFavored: (value: boolean) => void;
}

const FilimForm: React.FC<Props> = (props: Props) => {
  const [filimNameInput, setFilimNameInput] = useState("");
  const [filimTypeInput, setFilimTypeInput] = useState("");

  const onChangeFilimName = (e: ChangeEvent<HTMLInputElement>) => {
    setFilimNameInput(e.target.value);
  };
  const onChangeFilimType = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilimTypeInput(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.setFilimName(filimNameInput);
    props.setFilimType(filimTypeInput);
    props.setFavored(false);
  };

  const onClickFavor = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setFavored(true);
  };

  return (
    <FilimFormCom onSubmit={onSubmit}>
      <input
        placeholder="Filim Name"
        type="text"
        onChange={onChangeFilimName}
        value={filimNameInput}
      />
      <select onChange={onChangeFilimType} value={filimTypeInput}>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button type="submit">Flowing</button>
      <button onClick={onClickFavor}>Show Favor</button>
    </FilimFormCom>
  );
};

export default FilimForm;
