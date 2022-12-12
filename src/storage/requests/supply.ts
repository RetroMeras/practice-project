import { deleteReq, get, post, put } from "../../utils/request";
import { ISupply } from "../../types/ISupply";
import { API_URL } from "../main";

export const getSupplies = async (): Promise<ISupply[] | null> => {
  const response = await get(`${API_URL}/supply`);
  if (response.status != 200) return null;
  return response.json().then(items => items.map((item: any) => ({
    id: item.id,
    buyer: item.buyer,
    seller: item.seller,
    resource: item.resource,
    price: {
      value: item.price_value,
      unit: item.price_unit
    },
    size: {
      value: item.size_value,
      unit: item.size_unit,
    }
  } as ISupply))) as Promise<ISupply[]>;
};

export const postSupply = (supply: ISupply) => {
  return post(`${API_URL}/supply`, supply);
};

export const putSupply = (supply: ISupply) => {
  return put(`${API_URL}/supply/${supply.id}`, supply);
};

export const deleteSupply = (id: string) => {
  return deleteReq(`${API_URL}/supply/${id}`);
};
