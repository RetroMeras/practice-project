import { deleteReq, get, post, put } from "../../utils/request";
import { IResource } from "../../types/IResource";
import { API_URL } from "../main";

export const getResources = async (): Promise<IResource[] | null> => {
  const response = await get(`${API_URL}/resource`);
  if (response.status != 200) return null;
  return response.json() as Promise<IResource[]>;
};

export const postResource = (resource: IResource) => {
  return post(`${API_URL}/resource`, resource);
};

export const putResource = (resource: IResource) => {
  return put(`${API_URL}/resource/${resource.id}`, resource);
};

export const deleteResource = (id: string) => {
  return deleteReq(`${API_URL}/resource/${id}`);
};
