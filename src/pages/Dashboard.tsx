import React from 'react';
import { useIssueStore } from '../store/issueStore';
import { useAuthStore } from '../store/authStore';
import { IssueCard } from '../components/IssueCard';
import { IssueForm } from '../components/IssueForm';

export function Dashboard() {
  const { issues } = useIssueStore();
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Issue</h2>
        <IssueForm />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Issues</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
}