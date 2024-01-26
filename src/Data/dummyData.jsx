/** @format */

import { FaHouse, FaSlideshare, FaChartPie } from "react-icons/fa6";

import { MdOndemandVideo, MdShoppingBag } from "react-icons/md";

import { HiUsers } from "react-icons/hi";

//statisticsIcon
import { GiBroadsword } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
import { FaFire } from "react-icons/fa6";

import Dota2 from "../../public/Dota2.jpg";
import Valorant from "../../public/Valorant.jpg";
import GenshinImpact from "../../public/GenshinImpact.jpg";
import Lol from "../../public/LOL.jpg";
import Sawako from "../../public/sawako.jpg";
import CatLive from "../../public/CatsLive.jpg";
import ValoStream from "../../public/ValoStream.jpg";

//upcoming stream images
import ValoUpStream from "../../public/upStreams/Reyna.jpg";
import LOLlive from "../../public/upStreams/LOLlive.jpg";
import GenshinLive from "../../public/upStreams/GenshinLive.jpg";
import Dota2Live from "../../public/upStreams/Dota2Live.jpg";
import GTAV from "../../public/upStreams/GTAV.jpg";
import CSGO from "../../public/upStreams/CSGO.jpg";
import Minecraft from "../../public/upStreams/Minecraft.jpg";
import Spiderman from "../../public/upStreams/Spider-man.jpg";
import AOT from "../../public/upStreams/AOT.jpg";
import LethalComponay from "../../public/upStreams/LethalComponay.jpg";

//Last match images
import Logo01 from "../../public/LastmatchImgs/Logo01.jpg";
import Logo02 from "../../public/LastmatchImgs/Logo02.jpg";
import Logo03 from "../../public/LastmatchImgs/Logo03.jpg";
import Logo04 from "../../public/LastmatchImgs/Logo04.jpg";
import Logo05 from "../../public/LastmatchImgs/Logo05.jpg";
import Logo06 from "../../public/LastmatchImgs/Logo06.jpg";
import Logo07 from "../../public/LastmatchImgs/Logo07.jpg";
import Logo08 from "../../public/LastmatchImgs/Logo08.jpg";

//paid games images
import AOE from "../../public/paidGames/AOE.jpg";
import BloonsTD from "../../public/paidGames/BloonsTD.jpg";
import FM from "../../public/paidGames/FM.jpg";
import FNAF from "../../public/paidGames/FNAF.jpg";
import GOW from "../../public/paidGames/GOW.jpg";
import IAF from "../../public/paidGames/IAF.jpg";
import Limbo from "../../public/paidGames/Limbo.jpg";
import MC from "../../public/paidGames/MC.jpg";
import Plague from "../../public/paidGames/Plague.jpg";
import RFTA from "../../public/paidGames/RFTA.jpg";
import SBZ from "../../public/paidGames/SBZ.jpg";
import SOT from "../../public/paidGames/SOT.jpg";
import SurvivalCraft from "../../public/paidGames/SurvivalCraft.jpg";
import SV from "../../public/paidGames/SV.jpg";

//Logos img
import CSGOO from "../../public/Logos/CSGO.png";
import Dota from "../../public/Logos/Dota.png";
import Fortnite from "../../public/Logos/Fortnite.png";
import GTV from "../../public/Logos/GTAV.png";
import MCPE from "../../public/Logos/MCPE.png";
import SPIDEY from "../../public/Logos/SPIDEY.png";
import Valo from "../../public/Logos/Valo.png";

//friends logo
import Furina from "../../public/player/Furina.png";
import HuTao from "../../public/player/HuTao.png";

//live stream img
import basta from "../../public/StreamImg/basta.jpg";
import DotaC from "../../public/StreamImg/DotaC.jpg";
import FarC from "../../public/StreamImg/FarC.jpg";
import GenshinC from "../../public/StreamImg/GenshinC.jpg";
import GtaC from "../../public/StreamImg/GtaC.jpg";
import JustC from "../../public/StreamImg/JustC.jpg";
import LolC from "../../public/StreamImg/LolC.jpg";
import mcpe4 from "../../public/StreamImg/mcpe4.jpg";
import MissC from "../../public/StreamImg/MissC.jpg";
import PUBGSTREAM from "../../public/StreamImg/PUBGSTREAM.jpg";
import ValoC from "../../public/StreamImg/ValoC.jpg";
import ValorantStream from "../../public/StreamImg/ValorantStream.jpg";
import pfp from "../../public/StreamImg/profile.jpg";

export const navData = [
  {
    name: "Home",
    icon: <FaHouse />,
    link: "/",
    id: 1,
  },
  {
    name: "Shop",
    icon: <MdShoppingBag />,
    link: "/Shop",
    id: 2,
  },
  {
    name: "Match",
    icon: <FaSlideshare />,
    link: "/Matches",
    id: 3,
  },
  {
    name: "Friends",
    icon: <HiUsers />,
    link: "/Friends",
    id: 4,
  },
  {
    name: "Stream",
    icon: <MdOndemandVideo />,
    link: "/Streams",
    id: 5,
  },
  {
    name: "Statistics",
    icon: <FaChartPie />,
    link: "/Statistics",
    id: 6,
  },
];

export const popularGamesData = [
  {
    img: Valorant,
    name: "Valorant",
    id: 1,
  },
  {
    img: Lol,
    name: "League of Legends",
    id: 2,
  },
  {
    img: GenshinImpact,
    name: "Genshin Impact",
    id: 3,
  },
  {
    img: Dota2,
    name: "Dota 2",
    id: 4,
  },
];

export const friendStreamData = [
  {
    img: Sawako,
    id: 1,
  },
  {
    img: CatLive,
    id: 2,
  },
  {
    img: ValoStream,
    id: 3,
  },
];

export const upStreamsOneData = [
  {
    name: "Valorant",
    img: ValoUpStream,
    date: "12-15-2024",
    id: 1,
  },
  {
    name: "League of Legends",
    img: LOLlive,
    date: "12-28-2024",
    id: 2,
  },
  {
    name: "Genshin Impact",
    img: GenshinLive,
    date: "1-1-2024",
    id: 3,
  },
  {
    name: "Dota 2",
    img: Dota2Live,
    date: "2-2-2222",
    id: 4,
  },
  {
    name: "CSGO",
    img: CSGO,
    date: "1-1-1111",
    id: 5,
  },
  {
    name: "Minecraft",
    img: Minecraft,
    date: "3-3-3333",
    id: 6,
  },
  {
    name: "GTA V",
    img: GTAV,
    date: "4-4-4444",
    id: 7,
  },
  {
    name: "Spider-man",
    img: Spiderman,
    date: "5-5-5555",
    id: 8,
  },
  {
    name: "Attack on Titan: Final Season",
    img: AOT,
    date: "12-28-2005",
    id: 9,
  },
  {
    name: "Lethal Company",
    img: LethalComponay,
    date: "6-6-6666",
    id: 10,
  },
];

export const matchesHistoryData = [
  {
    logo_one: Logo01,
    logo_two: Logo02,
    title: "Valorant",
    score_one: 0,
    score_two: 2,
    date: "12-28-25",
    matchDetail: {
      name_one: "Thunder",
      name_two: "Lion",
      date: "01-02-03",
      ratings: {
        first: "2.8",
        second: "1.5",
      },
    },
  },
  {
    logo_one: Logo03,
    logo_two: Logo04,
    title: "Dota",
    score_one: 2,
    score_two: 1,
    date: "12-28-25",
    matchDetail: {
      name_one: "Crow",
      name_two: "Pheonix",
      ratings: {
        first: "2.8",
        second: "1.5",
      },
    },
  },
  {
    logo_one: Logo05,
    logo_two: Logo06,
    title: "Fortnite",
    score_one: 2,
    score_two: 0,
    date: "12-28-25",
    matchDetail: {
      name_one: "Onyx",
      name_two: "Pickachu",
      ratings: {
        first: "2.8",
        second: "1.5",
      },
    },
  },
  {
    logo_one: Logo07,
    logo_two: Logo08,
    title: "CSGO",
    score_one: 0,
    score_two: 2,
    date: "12-28-25",
    matchDetail: {
      name_one: "Ghost",
      name_two: "LadyFox",
      ratings: {
        first: "2.8",
        second: "1.5",
      },
    },
  },
];

export const sideHeaderData = [
  {
    team_one: Logo01,
    team_two: Logo02,
    name_one: "Thunder",
    name_two: "Lion",
    first: "2.8",
    second: "1.5",
    score_one: 0,
    score_two: 2,
    title: "Valorant",
    matchDetail: [
      {
        time: "00:00",
        date: "12-14-15",
        id: 1,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 2,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 3,
      },
    ],
  },
  {
    team_one: Logo03,
    team_two: Logo04,
    name_one: "Crow",
    name_two: "Pheonix",
    first: "2.8",
    second: "1.5",
    score_one: 0,
    score_two: 2,
    title: "Dota",
  },
  {
    team_one: Logo05,
    team_two: Logo06,
    name_one: "Onyx",
    name_two: "Pikachu",
    first: "2.8",
    second: "1.5",
    score_one: 0,
    score_two: 2,
    title: "Fortnite",
    matchDetail: [
      {
        time: "00:00",
        date: "12-14-15",
        id: 4,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 5,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 6,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 7,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 8,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 9,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 10,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 11,
      },
      {
        time: "00:00",
        date: "12-14-15",
        id: 12,
      },
    ],
  },
];

export const paidGamesData = [
  {
    img: AOE,
    name: "Age of Empires",
    description:
      "Age of Empires II: Definitive Edition is a 2019 real-time strategy video game developed by Forgotten Empires and published by Xbox Game Studios. It is a remaster of the 1999 game Age of Empires II: The Age of Kings, celebrating the 20th anniversary of the original.",
    price: 19.99,
    id: 1,
  },
  {
    img: BloonsTD,
    name: "Bloons TD 6",
    description:
      "Bloons TD 6 is a 2018 tower defense game developed and published by Ninja Kiwi. The sixth entry in the Bloons Tower Defense series, it first released on June 13, 2018, for iOS and Android. It was later released on Microsoft Windows in December 2018, and macOS in March 2020 via Steam",
    price: 58.4,
    id: 2,
  },
  {
    img: FM,
    name: "Football Manager",
    description:
      "Football Manager 2024 is a football management simulation video game developed by Sports Interactive and published by Sega. It is part of its Football Manager series. It was released on November 6, 2023.",
    price: 59.99,
    id: 3,
  },
  {
    img: FNAF,
    name: "Five Nights at Freddy",
    description:
      "Five Nights at Freddy is a 2014 point-and-click survival horror game developed and published by Scott Cawthon. The player takes on the role of Mike Schmidt, a night security guard at a family pizzeria.",
    price: 7.99,
    id: 4,
  },
  {
    img: GOW,
    name: "Gears of War",
    description:
      "Gears of War 4 is a 2016 third-person shooter video game developed by The Coalition and published by Microsoft Studios for Windows and Xbox One. It is the fourth main installment in the Gears of War series, and the first mainline entry not to be developed by Epic Games",
    price: 19.99,
    id: 5,
  },
  {
    img: IAF,
    name: "I Am Fish",
    description:
      " Am Fish is a charming, physics-based adventure starring four intrepid fish friends, forcibly separated from their home in a pet shop fish tank.",
    price: 5.99,
    id: 6,
  },
  {
    img: Limbo,
    name: "Limbo",
    description:
      "Limbo is a puzzle-platform video game developed by independent studio Playdead and originally published by Microsoft Game Studios for the Xbox 360",
    price: 9.99,
    id: 7,
  },
  {
    img: MC,
    name: "Halo: The Master Chief Collection",
    description:
      "Halo: The Master Chief Collection is a compilation of first-person shooter video games in the Halo series.",
    price: 59.99,
    id: 8,
  },
  {
    img: Plague,
    name: "Plague Inc.",
    description:
      "Plague Inc. is a real-time strategy simulation video game, developed and published by UK-based independent video game studio Ndemic Creations.",
    price: 14.99,
    id: 9,
  },
  {
    img: RFTA,
    name: "Remnant: From the Ashes",
    description:
      "Remnant: From the Ashes is an action role-playing video game developed by Gunfire Games and published by Perfect World Entertainment.",
    price: 39.99,
    id: 10,
  },
  {
    img: SBZ,
    name: "Subnautica: Below Zero",
    description:
      "Subnautica: Below Zero is an open-world survival action-adventure video game developed and published by Unknown Worlds Entertainment. The game is the sequel to Subnautica.",
    price: 29.99,
    id: 11,
  },
  {
    img: SOT,
    name: "Sea of Thieves",
    description:
      "Sea of Thieves 2023 Edition. Included with Game PassOffers in app purchases. Included + with. Game Pass. Forza Horizon 5 Standard Edition.",
    price: 39.99,
    id: 12,
  },
  {
    img: SurvivalCraft,
    name: "Survival Craft 2",
    description:
      "You are marooned on the shores of an infinite blocky world. Explore, mine resources, craft tools and weapons, make traps and grow plants. ",
    price: 3.99,
    id: 13,
  },
  {
    img: SV,
    name: "Stardew Valley",
    description:
      'Stardew Valley is a farm life simulation game developed by Eric "ConcernedApe" Barone. Players take the role of a character who inherits their deceased grandfathers dilapidated farm in a place known as Stardew Valley. The game was released for Windows in February 2016 before being ported to other platforms.',
    price: 49.99,
    id: 14,
  },
];

export const globalHighlightsData = [
  {
    logo: Valo,
    name_one: "Dragon",
    name_two: "Chicken",
    score_one: 3,
    score_two: 4,
  },
  {
    logo: CSGOO,
    name_one: "Pistols",
    name_two: "Gatling",
    score_one: 0,
    score_two: 4,
  },
  {
    logo: Dota,
    name_one: "Panda",
    name_two: "Shadow",
    score_one: 4,
    score_two: 1,
  },
  {
    logo: GTV,
    name_one: "France",
    name_two: "Closis",
    score_one: 2,
    score_two: 3,
  },
  {
    logo: Fortnite,
    name_one: "Glooos",
    name_two: "GawkGawk",
    score_one: 4,
    score_two: 1,
  },
  {
    logo: SPIDEY,
    name_one: "Andrew",
    name_two: "Garfield",
    score_one: 3,
    score_two: 2,
  },
  {
    logo: MCPE,
    name_one: "Dreams",
    name_two: "Mr. Beasty",
    score_one: 4,
    score_two: 1,
  },
];

export const matchesHighlightGamesData = [
  {
    title: "Valorant",
    match_one: [
      {
        team_one: Logo01,
        team_two: Logo02,
        matchOne_teamOne: "Fireflux",
        matchOne_teamTwo: "WaterFlux",
        matchOne_scoreOne: 0,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo01,
        team_two: Logo02,
        matchOne_teamOne: "Fireflux",
        matchOne_teamTwo: "WaterFlux",
        matchOne_scoreOne: 1,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo01,
        team_two: Logo02,
        matchOne_teamOne: "Fireflux",
        matchOne_teamTwo: "WaterFlux",
        matchOne_scoreOne: 2,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo01,
        team_two: Logo02,
        matchOne_teamOne: "Fireflux",
        matchOne_teamTwo: "WaterFlux",
        matchOne_scoreOne: 3,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
    ],
  },
  {
    title: "Dota",
    match_one: [
      {
        team_one: Logo03,
        team_two: Logo04,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 0,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo03,
        team_two: Logo04,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 1,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo03,
        team_two: Logo04,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 2,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo03,
        team_two: Logo04,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 3,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
    ],
  },
  {
    title: "League of Legends",
    match_one: [
      {
        team_one: Logo05,
        team_two: Logo08,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 0,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo05,
        team_two: Logo06,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 1,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo05,
        team_two: Logo06,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 2,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo05,
        team_two: Logo06,
        matchOne_teamOne: "GGSWAP",
        matchOne_teamTwo: "Pokemons",
        matchOne_scoreOne: 3,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
    ],
  },
  {
    title: "CSGO",
    match_one: [
      {
        team_one: Logo07,
        team_two: Logo08,
        matchOne_teamOne: "Washiwep",
        matchOne_teamTwo: "Colombus",
        matchOne_scoreOne: 0,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo07,
        team_two: Logo08,
        matchOne_teamOne: "Washiwep",
        matchOne_teamTwo: "Colombus",
        matchOne_scoreOne: 1,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo07,
        team_two: Logo08,
        matchOne_teamOne: "Washiwep",
        matchOne_teamTwo: "Colombus",
        matchOne_scoreOne: 2,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
      {
        team_one: Logo07,
        team_two: Logo08,
        matchOne_teamOne: "Washiwep",
        matchOne_teamTwo: "Colombus",
        matchOne_scoreOne: 3,
        matchOne_scoreTwo: 1,
        matchOne_rateOne: 1.4,
        matchOne_rateTwo: 1.5,
        date: "12-15-25",
      },
    ],
  },
];

export const friendsBannerData = [
  {
    logo: HuTao,
    name: "Hu tao",
    rating: 10,
    css: "bg-gradient-to-tl from-red-900 to-slate-900",
  },
  {
    logo: Furina,
    name: "Furina",
    rating: 9.9,
    css: "bg-gradient-to-tl from-blue-800 to-slate-900",
  },
];

export const friendsListData = [
  {
    logo: Logo01,
    name: "miss you",
    level: 10000,
    background: "bg-gradient-to-r from-[#120d21] to-[#9a00ff80]",
  },
  {
    logo: Logo02,
    name: "hi hello",
    level: 200,
    background: "bg-gradient-to-r from-[#120d21] to-[#5e00ec80]",
  },
  {
    logo: Logo03,
    name: "how are you?",
    level: 23,
    background: "bg-gradient-to-r from-[#120d21] to-[#00bf1980]",
  },
  {
    logo: Logo04,
    name: "ewan ko",
    level: 60,
    background: "bg-gradient-to-r from-[#120d21] to-[#c9d50080]",
  },
  {
    logo: Logo05,
    name: "geng geng na pagod",
    level: 200,
    background: "bg-gradient-to-r from-[#120d21] to-[#eb00ce80]",
  },
  {
    logo: Logo06,
    name: "miss na kita",
    level: 10,
    background: "bg-gradient-to-r from-[#120d21] to-[#eb8d0080]",
  },
  {
    logo: Logo07,
    name: "hayssss",
    level: 10,
    background: "bg-gradient-to-r from-[#120d21] to-[#00c4b880]",
  },
  {
    logo: Logo08,
    name: "wowers",
    level: 1,
    background: "bg-gradient-to-r from-[#120d21] to-[#006e0980]",
  },
];

export const liveStreamData = [
  {
    img: ValorantStream,
    profile: pfp,
    views: 200,
    title: "Happy new year everyone 🎇🎆",
    user: "_pinklemoneyd",
    description: "Valorant",
    categories: [
      {
        category: "FPS",
      },
      {
        category: "English",
      },
    ],
  },
  {
    img: PUBGSTREAM,
    profile: pfp,
    views: 50,
    title: "Grinding against strong peeps",
    user: "MeeleGod",
    description: "PUBG: Player Unknowns Battle Grounds",
    categories: [
      {
        category: "PUBG",
      },
      {
        category: "English",
      },
      {
        category: "FPS",
      },
      {
        category: "VoiceActive",
      },
    ],
  },
  {
    img: mcpe4,
    profile: pfp,
    views: 400,
    title: "House tour before this year ends",
    user: "Jumbo_Mumbo",
    description: "Minecraft",
    categories: [
      {
        category: "Minecraft",
      },
      {
        category: "Cozy",
      },
    ],
  },
  {
    img: basta,
    profile: pfp,
    views: 10,
    title: "24 hours stream",
    user: "Sleepless",
    description: "Stream",
    categories: [
      {
        category: "24 hours",
      },
      {
        category: "English",
      },
    ],
  },
];

export const catrgoryStreamData = [
  {
    img: JustC,
    title: "Just Chatting",
    views: 500,
    categores: [
      {
        categories: "IRL",
      },
    ],
  },
  {
    img: ValoC,
    title: "Valorant",
    views: 31.8,
    categores: [
      {
        categories: "FPS",
      },
      {
        categories: "Shooter",
      },
    ],
  },
  {
    img: DotaC,
    title: "Dota 2",
    views: 19.3,
    categores: [
      {
        categories: "Strategy",
      },
      {
        categories: "MOBA",
      },
    ],
  },
  {
    img: LolC,
    title: "League of Legends",
    views: 50.9,
    categores: [
      {
        categories: "RPG",
      },
      {
        categories: "Strategy",
      },
    ],
  },
  {
    img: FarC,
    title: "Farlight84",
    views: 10.2,
    categores: [
      {
        categories: "FPS",
      },
      {
        categories: "Shooter",
      },
    ],
  },
  {
    img: GtaC,
    title: "Grand Thef Auto: V",
    views: 103,
    categores: [
      {
        categories: "RPG",
      },
      {
        categories: "Shooter",
      },
    ],
  },
  {
    img: MissC,
    title: "Miss you",
    views: 999,
    categores: [
      {
        categories: "Miss you",
      },
    ],
  },
  {
    img: GenshinC,
    title: "Genshin Impact",
    views: 100,
    categores: [
      {
        categories: "RPG",
      },
    ],
  },
];

export const streamTitleData = [
  {
    title: "Vtuber",
  },
  {
    title: "Recommended Grand Theft Auto V channels",
  },
  {
    title: "Drops Enabled",
  },
  {
    title: "It's Indie Game time",
  },
  {
    title: "All aboard the Hype Train!",
  },
  {
    title: "Platformer Games",
  },
  {
    title: "Recently Released Games' Streams",
  },
  {
    title: "Recommended smaller communities",
  },
];

export const statisticsPowerData = [
  {
    icon: <GiBroadsword />,
    name: "Force",
    power: 8,
  },
  {
    icon: <GiRunningNinja />,
    name: "Speed",
    power: 5,
  },
  {
    icon: <FaFire />,
    name: "Magic",
    power: 4,
  },
];
