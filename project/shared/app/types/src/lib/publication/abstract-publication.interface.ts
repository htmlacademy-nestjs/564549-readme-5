import { Like } from "./like.interface";


export interface AbstractPublication {
  authorId: string;
  title: string;
  tags: string[];
  id?: string;
  likesIds: string[];
  commentsIds: string[];
}
