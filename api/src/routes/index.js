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
    // data.push(rickApi);
    // data.push(rickDB);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/episodes", async (req, res) => {
  const rickApi = await axios
    .get("https://rickandmortyapi.com/api/episode")
    .catch((err) => console.log(err))
    .then((res) => res.data.results);

  rickApi.map((obj) =>
    Episode.create({
      name: obj.name,
      id: obj.id,
    })
  );

  const allEpisodes = await Episode.findAll();

  res.status(200).json(allEpisodes);
});

router.post("/character", async (req, res) => {
  const { id, name, species, image, created, origin } = req.query;

  const createCharacter = await Character.create({
    id,
    name,
    species,
    image,
    created,
    origin,
  });

  const searchEpisode = await Episode.findAll({
    where: { name: episode },
  });
  createCharacter.addEpisode(searchEpisode);
  
  res.status(200).send("Character created successfully");
});

module.exports = router;
