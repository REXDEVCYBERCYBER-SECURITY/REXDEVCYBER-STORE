
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  SECURITY_METHODOLOGY = 'SECURITY_METHODOLOGY',
  VULNERABILITIES = 'VULNERABILITIES',
  AI_ANALYST = 'AI_ANALYST',
  STORE = 'STORE'
}

export interface SecurityMethodologyStep {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface VulnerabilityRecord {
  id: string;
  type: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  description: string;
  discovered: string;
}

export interface TrafficData {
  time: string;
  requests: number;
  threats: number;
}
