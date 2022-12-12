import { deleteReq, get, post, put } from "../../utils/request";
import { IParticipant } from "../../types/IParticipant";
import { API_URL } from "../main";

export const getParticipants = async (): Promise<IParticipant[] | null> => {
  const response = await get(`${API_URL}/participant`);
  if (response.status != 200) return null;
  return response.json() as Promise<IParticipant[]>;
};

export const postParticipant = (participant: IParticipant) => {
  return post(`${API_URL}/participant`, participant);
};

export const putParticipant = (participant: IParticipant) => {
  return put(`${API_URL}/participant/${participant.id}`, participant);
};

export const deleteParticipant = (id: string) => {
  return deleteReq(`${API_URL}/participant/${id}`);
};
