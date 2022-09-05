const { Router } = require("express");
const router = Router();
const { Character, Episode } = require("../db");
const axios = require("axios");

// Configurar los routers

router.get("/characters", async (req, res) => {
  let data = [];
  const rickApi = await axios
    .get("https://rickandmortyapi.com/api/character")
    .catch((err) => console.log(err))
    .then((res) => res.data);

  try {
    const rickDB = await Character.findAll();
    data.push(rickApi);
    data.push(rickDB);
    res.status(200).json(data);
  } catch(err) {
    res.status(400).send(err)
  }

});

router.get("/episodes", async (req, res) => {
    let data = [];
    const rickApi = await axios
      .get("https://rickandmortyapi.com/api/episode")
      .catch((err) => console.log(err))
      .then((res) => res.data);
  
    try {
      const rickDB = await Episode.findAll();
      data.push(rickApi);
      data.push(rickDB);
      res.status(200).json(data);
    } catch(err) {
      res.status(400).send(err)
    }
});

router.post("/character", async (req, res) => {
  //   Character.create({
  //     id: "07f0913c-2d50-11ed-a261-0242ac120002",
  //     name: "Dario",
  //     species: "hola",
  //     origin: "hola",
  //     image: "hola",
  //     created: "hola",
  //   });
  //   res.status(200).json('asd');
});

module.exports = router;
