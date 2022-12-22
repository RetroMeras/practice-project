export interface IParticipant {
  id: string;
  name: string;
}

export interface IParticipantSubmit extends IParticipant{
  resource: string
}