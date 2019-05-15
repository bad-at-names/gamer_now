import CSGoImg from "../../../main_assets/csgo_logo.png";
import DotaImg from "../../../main_assets/dota2logo.png";
import OWImg from "../../../main_assets/overwatch_logo.png";

const gameLogo = dota_title => {
  switch (dota_title) {
    case "dota":
      return DotaImg;
    case "overwatch":
      return OWImg;
    case "csgo":
      return CSGoImg;
    default:
      return OWImg;
  }
};

export default gameLogo;
