type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  title: string;
  company?: string;
  paragraph: string;
  thumbnail: string;
  images?: string[];
  capacity?: number;
  author?: Author;
  tags?: string[];
  publishDate: string;
};
