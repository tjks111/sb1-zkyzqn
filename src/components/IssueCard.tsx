import React from 'react';
import { format } from 'date-fns';
import { ArrowUp, MessageCircle } from 'lucide-react';
import type { Issue } from '../types';
import { useIssueStore } from '../store/issueStore';

interface IssueCardProps {
  issue: Issue;
}

export function IssueCard({ issue }: IssueCardProps) {
  const { voteIssue } = useIssueStore();

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {format(issue.createdAt, 'PPP')}
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            statusColors[issue.status]
          }`}
        >
          {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
        </span>
      </div>

      <p className="mt-4 text-gray-600">{issue.description}</p>

      <div className="mt-4 flex items-center space-x-4">
        <button
          onClick={() => voteIssue(issue.id)}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
        >
          <ArrowUp className="h-4 w-4" />
          <span>{issue.votes}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <MessageCircle className="h-4 w-4" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}