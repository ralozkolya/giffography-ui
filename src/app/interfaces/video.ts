import { File } from './file';

export interface Video {
  id: number;
  url: string;
  event: number;
  files: Files;
}

interface Files {
  thumb: File;
  video: File;
}
