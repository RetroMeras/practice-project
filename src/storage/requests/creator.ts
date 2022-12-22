import { deleteReq, get, post } from "../../utils/request";
import { ICreator } from "../../types/ICreator";
import { API_URL } from "../main";

export const getCreators = async (): Promise<ICreator[] | null> => {
  const response = await get(`${API_URL}/creator`);
  if (response.status != 200) return null;
  return response.json() as Promise<ICreator[]>;
};

export const postCreator = (creator: ICreator) => {
  return post(`${API_URL}/creator`, creator);
};

export const deleteCreator = (id: string) => {
  return deleteReq(`${API_URL}/creator/${id}`);
};
