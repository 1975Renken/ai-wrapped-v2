export interface ChatLog {
  id: string;
  timestamp: string;
  content: string;
  topic?: string;
  duration: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'milestone' | 'progress' | 'streak';
}

export interface AnalyticsSummary {
  totalChats: number;
  totalHours: number;
  topTopics: Array<{ name: string; count: number }>;
  achievements: Achievement[];
  growth: {
    questionAccuracy: number;
    topicsExplored: number;
    conceptsMastered: number;
  };
}