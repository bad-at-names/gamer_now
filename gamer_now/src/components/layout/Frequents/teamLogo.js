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
        var teamLogo;
        switch(props){
            case "ATL":
                return ATL;
                break;
            case "BOS":
                return BOS;
                break;
            case "CDH":
                return CDH;
                break;
            case "DAL":
                return DAL;
                break;
            case "FLA":
                return FLA;
                break;
            case "GLA":
                return GLA;
                break;
            case "GZC":
                return GZC;
                break;
            case "HOU":
                return HOU;
                break;
            case "HZS":
                return HZS;
                break;
            case "LDN":
                return LDN;
                break;
            case "NYE":
                return NYE;
                break;
            case "PAR":
                return PAR;
                break;
            case "PHI":
                return PHI;
                break;
            case "SEO":
                return SEO;
                break;
            case "SFS":
                return SFS;
                break;
            case "SHD":
                return SHD;
                break;
            case "TOR":
                return TOR;
                break;
            case "VAL":
                return VAL;
                break;
            case "VAN":
                return VAN;
                break;
            default:
                return WAS;
        }
}

export default teamLogo;