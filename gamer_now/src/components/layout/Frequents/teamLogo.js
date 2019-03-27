import React from 'react';
import ATL from '../../../main_assets/overwatch_teams/ATL.svg';
import BOS from '../../../main_assets/overwatch_teams/BOS.svg';
import CDH from '../../../main_assets/overwatch_teams/CDH.svg';
import DAL from '../../../main_assets/overwatch_teams/DAL.svg';
import FLA from '../../../main_assets/overwatch_teams/FLA.svg';
import GLA from '../../../main_assets/overwatch_teams/GLA.svg';
import GZC from '../../../main_assets/overwatch_teams/GZC.svg';
import HOU from '../../../main_assets/overwatch_teams/HOU.svg';
import HZS from '../../../main_assets/overwatch_teams/HZS.svg';
import LDN from '../../../main_assets/overwatch_teams/LDN.svg';
import NYE from '../../../main_assets/overwatch_teams/NYE.svg';
import PAR from '../../../main_assets/overwatch_teams/PAR.svg';
import PHI from '../../../main_assets/overwatch_teams/PHI.svg';
import SEO from '../../../main_assets/overwatch_teams/SEO.svg';
import SFS from '../../../main_assets/overwatch_teams/SFS.svg';
import SHD from '../../../main_assets/overwatch_teams/SHD.svg';
import TOR from '../../../main_assets/overwatch_teams/TOR.svg';
import VAL from '../../../main_assets/overwatch_teams/VAL.svg';
import VAN from '../../../main_assets/overwatch_teams/VAN.svg';
import WAS from '../../../main_assets/overwatch_teams/WAS.svg';

const teamLogo = (props) => {
    var teamlogo;
    switch(props){
        case "ATL":
            teamlogo =  ATL;
            break;
        case "BOS":
            teamlogo = BOS;
            break;
        case "CDH":
            teamlogo = CDH;
            break;
        case "DAL":
            teamlogo = DAL;
            break;
        case "FLA":
            teamlogo =  FLA;
            break;
        case "GLA":
            teamlogo = GLA;
            break;
        case "GZC":
            teamlogo = GZC;
            break;
        case "HOU":
            teamlogo = HOU;
            break;
        case "HZS":
            teamlogo = HZS;
            break;
        case "LDN":
            teamlogo = LDN;
            break;
        case "NYE":
            teamlogo = NYE;
            break;
        case "PAR":
            teamlogo = PAR;
            break;
        case "PHI":
            teamlogo = PHI;
            break;
        case "SEO":
            teamlogo = SEO;
            break;
        case "SFS":
            teamlogo = SFS;
            break;
        case "SHD":
            teamlogo = SHD;
            break;
        case "TOR":
            teamlogo = TOR;
            break;
        case "VAL":
            teamlogo = VAL;
            break;
        case "VAN":
            teamlogo = VAN;
            break;
        default:
            teamlogo = WAS;
    }
    return teamlogo;
}

export default teamLogo;