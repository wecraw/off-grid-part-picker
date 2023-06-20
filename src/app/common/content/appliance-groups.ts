import { ApplianceGroup } from "../interfaces/appliance-group";
import { appliances } from "./appliances";

export const testAppliances: ApplianceGroup = {
    name: 'Kitchen',
    id: 'kitchen',
    appliances: appliances.filter(appliance => appliance.applianceGroup === 'kitchen')
}