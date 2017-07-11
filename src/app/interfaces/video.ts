export interface Video {
  id: number;
  url: string;
  files: Files;
}

interface Files {
  thumb: File;
  video: File;
}

interface File {
  full_path: string;
  mimetype: string;
}
