import groupsImg from "../assets/groupsImg.jpg";
import discoverImg from "../assets/discoverImg.png";
import listsImg from "../assets/listsImg.jpg";
import missionImg from "../assets/missionImg.png";

export default [
  {
    image: groupsImg,
    text: {
      en: {
        title: "Join groups",
        description: `The social network that puts you in control.
We're revolutionizing the way you organize your thoughts, plans, and interests, and connect with others.`,
      },
      fin: {
        title: "Azure virtuaalinen avustaja",
        description:
          "Microsoft Azure Bot Services -palveluja käyttäen loin virtuaalisen avustajan. Se osaa vastata mm. yritystä koskeviin kysymyksiin, mutta sen päätarkoitus on yhdistää käyttäjät inventaarion hallintaan.  Se on yhdistetty QnA Maker Knowledge Base -tietokantaan ja Azures Language Understandingiin (LUIS).",
      },
    },
  },
  {
    image: discoverImg,
    text: {
      en: {
        title: "Discover",
        description: `Think of it as a diary and wish list on the next level, creating a cutting-edge network that unlocks new possibilities for personal and social experiences!`,
      },
      fin: {
        title: "inventaario sovellus",
        description:
          "Inventaario sovellus, jossa harjoittelin MVC-arkkitehtuuria. Rakensin sovelluksen käyttäen" +
          " Node.js Expressiä backend puolella ja MongoDB:tä tietokantana. Sovelluksen avulla käyttäjät voivat " +
          "selata yrityksen koko varastoa tai löytää tiettyjä kohteita eri luokkien mukaan. . Sovellus on luotu täysin dynaamisista sivuista Handlebars:n avulla\n",
      },
    },
  },
  {
    image: listsImg,
    text: {
      en: {
        title: "Listings",
        description: `With Overlapp, you can keep all your thoughts and to-dos in one place and share them with whoever you want or keep them to yourself.`,
      },
      fin: {
        title: "Battleships",
        description:
          "Reactin ja Webpackin avulla rakennettu klassinen laivanupotus peli, jossa pelaaja pelaa" +
          " AI:tä vastaan. Projektin tavoitteena oli harjoitella JavaScript-objektien ja -classien käyttöä" +
          " ja ottaa ensikosketus TDD (Test Driven Development) -käytäntöihin Jest:n avulla.",
      },
    },
  },
  {
    image: missionImg,
    text: {
      en: {
        title: "Our mission",
        description: `Providing everyone with a better way to connect. To enable everyone to better understand each other and connect on a more meaningful level through shared experiences.`,
      },
      fin: {
        title: "CV maker",
        description:
          "Syvä sukellus Reactiin ja React Hooksien käyttöön. Sovelluksessa käyttäjä voi" +
          " rakentaa oman CV:n, täyttämällä erillaisia lomakkeita omilla tiedoillaan. Kaikki käyttäjän antamat" +
          " tiedot tallennetaan selaimen local storageen. Jos käyttäjä haluaa myöhemmin listätä tai muokata" +
          " antamiaan tietoja, hänen ei näin tarvitse aloittaa alusta.",
      },
    },
  },
];
