
import { SecurityMethodologyStep, VulnerabilityRecord, TrafficData } from './types';

export const METHODOLOGY_STEPS: SecurityMethodologyStep[] = [
  {
    id: '1',
    title: 'Define Scope and Objectives',
    description: 'Clearly define the scope of the security test, including systems, networks, and applications.',
    details: [
      'Establish specific objectives (e.g., identifying critical vulnerabilities)',
      'Validating protection mechanisms',
      'Testing connectivity resilience'
    ]
  },
  {
    id: '2',
    title: 'Vulnerability Assessment',
    description: 'Utilize automated tools and manual testing to identify security gaps.',
    details: [
      'Run tools like Nessus or OpenVAS',
      'Conduct manual penetration testing',
      'Focus on SQL injection, XSS, and RCE'
    ]
  },
  {
    id: '3',
    title: 'Exploit Vulnerabilities',
    description: 'Attempt to exploit identified vulnerabilities to demonstrate potential impact.',
    details: [
      'Use tools like Metasploit',
      'Assess severity through controlled environments',
      'Document attack paths'
    ]
  },
  {
    id: '4',
    title: 'Connectivity Testing',
    description: 'Assess network entry points and analyze firewall configurations.',
    details: [
      'Port scanning for open services',
      'Analyze firewall rules',
      'Network sniffing for weaknesses'
    ]
  },
  {
    id: '5',
    title: 'Protection Evaluation',
    description: 'Evaluate existing security controls like firewalls, IDS/IPS, and endpoint protection.',
    details: [
      'Test MFA and encryption effectiveness',
      'Hardening verification',
      'Logging and monitoring audit'
    ]
  }
];

export const RECENT_VULNERABILITIES: VulnerabilityRecord[] = [
  { id: 'VUL-2025-001', type: 'SQL Injection', severity: 'Critical', description: 'Authentication bypass via crafted query on login endpoint.', discovered: '2025-05-12' },
  { id: 'VUL-2025-002', type: 'Cross-Site Scripting', severity: 'Medium', description: 'Stored XSS in user profile comments section.', discovered: '2025-05-14' },
  { id: 'VUL-2025-003', type: 'Weak Encryption', severity: 'High', description: 'Legacy TLS versions found on internal API gateway.', discovered: '2025-05-15' },
  { id: 'VUL-2025-004', type: 'Remote Code Execution', severity: 'Critical', description: 'Unauthenticated RCE vulnerability in the core processing engine.', discovered: '2025-05-20' },
  { id: 'VUL-2024-005', type: 'Denial of Service', severity: 'High', description: 'API rate limiting bypassed, leading to service disruption.', discovered: '2024-06-01' },
  { id: 'VUL-2025-006', type: 'Broken Access Control', severity: 'High', description: 'Unauthorized access to sensitive user metadata via IDOR vulnerabilities.', discovered: '2025-06-15' },
];

export const MOCK_TRAFFIC: TrafficData[] = [
  { time: '00:00', requests: 400, threats: 12 },
  { time: '04:00', requests: 300, threats: 8 },
  { time: '08:00', requests: 800, threats: 25 },
  { time: '12:00', requests: 1200, threats: 45 },
  { time: '16:00', requests: 1100, threats: 38 },
  { time: '20:00', requests: 900, threats: 20 },
];
