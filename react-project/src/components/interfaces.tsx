export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface QuestionProps {
  title: string;
  variants: string[];
  correct: number;
}

export interface IQuizProps {
  quiz: QuestionProps[];
}
