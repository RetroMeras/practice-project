import { deleteReq, get, post, put } from "../../utils/request";
import { IUnit } from "../../types/IValue";
import { API_URL } from "../main";

export const getUnits = async (): Promise<IUnit[] | null> => {
  const response = await get(`${API_URL}/unit`);
  if (response.status != 200) return null;
  return response.json() as Promise<IUnit[]>;
};

export const postUnit = (unit: IUnit) => {
  return post(`${API_URL}/unit`, unit);
};

export const putUnit = (unit: IUnit) => {
  return put(`${API_URL}/unit/${unit.id}`, unit);
};

export const deleteUnit = (id: string) => {
  return deleteReq(`${API_URL}/unit/${id}`);
};
