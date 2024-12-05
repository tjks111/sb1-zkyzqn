import { create } from 'zustand';
import type { Issue } from '../types';

interface IssueState {
  issues: Issue[];
  addIssue: (issue: Issue) => void;
  updateIssue: (id: string, updates: Partial<Issue>) => void;
  voteIssue: (id: string) => void;
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  addIssue: (issue) => set((state) => ({ issues: [...state.issues, issue] })),
  updateIssue: (id, updates) =>
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.id === id ? { ...issue, ...updates } : issue
      ),
    })),
  voteIssue: (id) =>
    set((state) => ({
      issues: state.issues.map((issue) =>
        issue.id === id ? { ...issue, votes: issue.votes + 1 } : issue
      ),
    })),
}));