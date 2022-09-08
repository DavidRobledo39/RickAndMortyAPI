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
    .then((res) => res.data.results);

  try {
    const rickDB = await Character.findAll({
      include: {
        model: Episode,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    data = rickApi.concat(rickDB);

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
  const { id, name, species, image, created, origin, episodes } = req.body;

  const createCharacter = await Character.create({
    id,
    name,
    species,
    image,
    created,
    origin,
  });
  console.log(episodes);
  if (episodes.length) { 
    try { 
      episodes.forEach(async (epi) => {
        let episode = await Episode.findByPk(epi);
        createCharacter.addEpisode(episode);
      });
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).send("Character created successfully");
});

module.exports = router;
