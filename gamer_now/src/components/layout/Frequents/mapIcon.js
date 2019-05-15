import BLI from '../../../main_assets/overwatch_maps/bli.jpg';
import BUS from '../../../main_assets/overwatch_maps/bus.jpg';
import DOR from '../../../main_assets/overwatch_maps/dor.jpg';
import EIC from '../../../main_assets/overwatch_maps/eic.png';
import HAN from '../../../main_assets/overwatch_maps/han.jpg';
import HLC from '../../../main_assets/overwatch_maps/hlc.jpg';
import HOL from '../../../main_assets/overwatch_maps/hol.jpg';
import ILI from '../../../main_assets/overwatch_maps/ili.jpg';
import JUN from '../../../main_assets/overwatch_maps/jun.jpg';
import KIN from '../../../main_assets/overwatch_maps/kin.jpg';
import LIJ from '../../../main_assets/overwatch_maps/lij.jpg';
import NEP from '../../../main_assets/overwatch_maps/nep.jpg';
import NUM from '../../../main_assets/overwatch_maps/num.jpg';
import OAS from '../../../main_assets/overwatch_maps/oas.jpg';
import PAR from '../../../main_assets/overwatch_maps/par.jpg';
import RIA from '../../../main_assets/overwatch_maps/ria.jpg';
import ROU from '../../../main_assets/overwatch_maps/rou.jpg';
import TOA from '../../../main_assets/overwatch_maps/toa.jpg';
import VOL from '../../../main_assets/overwatch_maps/vol.jpg';
import WAT from '../../../main_assets/overwatch_maps/wat.jpg';

const mapIcon = props => {
	var icon;
	switch (props) {
		case 'blizzard':
		case 'blizzard-world':
			icon = BLI;
			break;
		case 'busan':
			icon = BUS;
			break;
		case 'dorado':
			icon = DOR;
			break;
		case 'eichenwalde':
			icon = EIC;
			break;
		case 'hanamura':
			icon = HAN;
			break;
		case 'horizon-lunar-colony':
		case 'lunar-colony':
			icon = HLC;
			break;
		case 'hollywood':
			icon = HOL;
			break;
		case 'ilios':
			icon = ILI;
			break;
		case 'junkertown':
			icon = JUN;
			break;
		case 'kings-row':
			icon = KIN;
			break;
		case 'lijiang-tower':
		case 'lijiang':
			icon = LIJ;
			break;
		case 'nepal':
			icon = NEP;
			break;
		case 'numbani':
			icon = NUM;
			break;
		case 'oasis':
			icon = OAS;
			break;
		case 'paris':
			icon = PAR;
			break;
		case 'rialto':
			icon = RIA;
			break;
		case 'route-66':
			icon = ROU;
			break;
		case 'temple-of-anubis':
		case 'anubis':
			icon = TOA;
			break;
		case 'volskaya':
			icon = VOL;
			break;
		case 'gibraltar':
		case 'watchpoint-gibraltar':
			icon = WAT;
			break;
	}
	return icon;
};

export default mapIcon;
