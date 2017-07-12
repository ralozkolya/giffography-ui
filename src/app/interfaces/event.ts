import { File } from './file';

export interface Event {
  id: number;
  name: string;
  parent: number;
  date: string;
  thumbnail: File;
  created_at: string;
  updated_at: string;
}
