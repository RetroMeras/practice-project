import { ICreator } from "../types/ICreator"
import { IParticipant } from "../types/IParticipant";
import { IResource } from "../types/IResource";
import { ISupply } from "../types/ISupply";

export const generate_creators_dict = (creators: ICreator[]) => {
  const creators_dict: { [key: string]: ICreator } = {};
  for (let i = 0; i < creators.length; i++) {
    creators_dict[creators[i].id] = { ...creators[i] };
  }
  return creators_dict
}
export const generate_resources_dict = (resources: IResource[]) => {
  const resources_dict: { [key: string]: IResource } = {};
  for (let i = 0; i < resources.length; i++) {
    resources_dict[resources[i].id] = { ...resources[i] };
  }
  return resources_dict
}

export const generate_participants_dict = (participants: IParticipant[]) => {
  const participants_dict: { [key: string]: IParticipant } = {};
  for (let i = 0; i < participants.length; i++) {
    participants_dict[participants[i].id] = participants[i];
  }
  return participants_dict
}

export const generate_supplies_dicts = (supplies: ISupply[]) => {
  const supplies_seller_dict: { [key: string]: ISupply[] } = {};
  const supplies_buyer_dict: { [key: string]: ISupply[] } = {};
  for (let i = 0; i < supplies.length; i++) {
    if (!supplies_seller_dict[supplies[i].seller]){
      supplies_seller_dict[supplies[i].seller] = [{ ...supplies[i] }];
    }else{
      supplies_seller_dict[supplies[i].seller].push({...supplies[i]});
    }
    if(!supplies_buyer_dict[supplies[i].buyer]){
      supplies_buyer_dict[supplies[i].buyer] = [{ ...supplies[i] }];
    }else{
      supplies_buyer_dict[supplies[i].buyer].push({...supplies[i]})
    }
  }
  return [supplies_seller_dict, supplies_buyer_dict]
}