import type { Issue, IssueStats, IssueType } from '../types';

export function calculateIssueStats(issues: Issue[]): IssueStats {
  const stats: IssueStats = {
    total: issues.length,
    pending: 0,
    inProgress: 0,
    resolved: 0,
    byType: {
      infrastructure: 0,
      sanitation: 0,
      safety: 0,
      other: 0,
    },
  };

  issues.forEach((issue) => {
    // Count by status
    if (issue.status === 'pending') stats.pending++;
    else if (issue.status === 'in-progress') stats.inProgress++;
    else if (issue.status === 'resolved') stats.resolved++;

    // Count by type
    stats.byType[issue.type as IssueType]++;
  });

  return stats;
}