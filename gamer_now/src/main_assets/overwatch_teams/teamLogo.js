import React from 'react';
import ATL from './ATL.svg';
import BOS from './BOS.svg';
import CDH from './CDH.svg';
import DAL from './DAL.svg';
import FLA from './FLA.svg';
import GLA from './GLA.svg';
import GZC from './GZC.svg';
import HOU from './HOU.svg';
import HZS from './HZS.svg';
import LDN from './LDN.svg';
import NYE from './NYE.svg';
import PAR from './PAR.svg';
import PHI from './PHI.svg';
import SEO from './SEO.svg';
import SFS from './SFS.svg';
import SHD from './SHD.svg';
import TOR from './TOR.svg';
import VAL from './VAL.svg';
import VAN from './VAN.svg';
import WAS from './WAS.svg';

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