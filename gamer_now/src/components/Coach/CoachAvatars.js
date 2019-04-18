import avatar0 from "../../main_assets/avatars/avatar0.png";
import avatar1 from "../../main_assets/avatars/avatar1.png";
import avatar2 from "../../main_assets/avatars/avatar2.png";
import avatar3 from "../../main_assets/avatars/avatar3.png";
import avatar4 from "../../main_assets/avatars/avatar4.png";
import avatar5 from "../../main_assets/avatars/avatar5.png";
import avatar6 from "../../main_assets/avatars/avatar6.png";
import avatar7 from "../../main_assets/avatars/avatar7.png";
import avatar8 from "../../main_assets/avatars/avatar8.png";
import avatar9 from "../../main_assets/avatars/avatar9.png";

export const avatar = a => {
  switch (a) {
    case "avatar0":
      return avatar0;
    case "avatar1":
      return avatar1;
    case "avatar2":
      return avatar2;
    case "avatar3":
      return avatar3;
    case "avatar4":
      return avatar4;
    case "avatar5":
      return avatar5;
    case "avatar6":
      return avatar6;
    case "avatar7":
      return avatar7;
    case "avatar8":
      return avatar8;
    default:
      return avatar9;
  }
};
