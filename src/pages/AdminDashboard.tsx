import React from 'react';
import { useIssueStore } from '../store/issueStore';
import { StatsCard } from '../components/admin/StatsCard';
import { IssueTypeChart } from '../components/admin/IssueTypeChart';
import { calculateIssueStats } from '../utils/stats';
import { IssueCard } from '../components/IssueCard';

export function AdminDashboard() {
  const { issues } = useIssueStore();
  const stats = calculateIssueStats(issues);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Issues"
          value={stats.total}
          description="All reported issues"
        />
        <StatsCard
          title="Pending"
          value={stats.pending}
          description="Issues awaiting review"
        />
        <StatsCard
          title="In Progress"
          value={stats.inProgress}
          description="Issues being addressed"
        />
        <StatsCard
          title="Resolved"
          value={stats.resolved}
          description="Completed issues"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Recent Issues
            </h2>
            <div className="space-y-6">
              {issues
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .slice(0, 5)
                .map((issue) => (
                  <IssueCard key={issue.id} issue={issue} isAdmin />
                ))}
            </div>
          </div>
        </div>
        <div>
          <IssueTypeChart stats={stats} />
        </div>
      </div>
    </div>
  );
}