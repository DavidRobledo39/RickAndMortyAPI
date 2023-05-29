import axios from "axios";

export async function infoDate(url) {
  const info = await axios.get("https://rickandmortyapi.com/api/character");

  return info;
}


console.log(infoDate());