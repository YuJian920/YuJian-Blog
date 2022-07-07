export interface ArticleData {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  content: string;
  createdAt: string;
  tips: string;
  notFound: boolean;
}

export interface BlogCustom {
  id: number;
  slogan: string;
  footer: string;
}
