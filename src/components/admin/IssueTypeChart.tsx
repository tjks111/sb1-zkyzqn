import React from 'react';
import type { IssueStats } from '../../types';

interface IssueTypeChartProps {
  stats: IssueStats;
}

export function IssueTypeChart({ stats }: IssueTypeChartProps) {
  const total = stats.total || 1; // Prevent division by zero

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Issues by Type</h3>
      <div className="space-y-4">
        {Object.entries(stats.byType).map(([type, count]) => (
          <div key={type}>
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
              <span className="capitalize">{type}</span>
              <span>{Math.round((count / total) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}