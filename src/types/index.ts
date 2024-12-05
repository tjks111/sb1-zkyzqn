export type User = {
  id: string;
  name: string;
  email: string;
  role: 'resident' | 'municipality';
  avatar?: string;
};

export type IssueStatus = 'pending' | 'in-progress' | 'resolved';

export type Issue = {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  status: IssueStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  votes: number;
  images: string[];
};

export type Comment = {
  id: string;
  content: string;
  userId: string;
  issueId: string;
  createdAt: Date;
};