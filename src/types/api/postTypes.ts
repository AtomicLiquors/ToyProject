type PostsResponse = {
  message: string;
  data: Array<PostType> | null;
};

type PostType = {
  id: Number;
  content: string;
  images: Array<ImageType>;
  user: UserType;
};
