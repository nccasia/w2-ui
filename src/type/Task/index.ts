import { IUser } from "../User";

export interface IActivityAction {
  id: number;
  user: IUser;
  typeAction: string;
  date: string;
}
