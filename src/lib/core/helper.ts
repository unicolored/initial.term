export function getBrowserName(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari')) return 'Safari';
  if (ua.includes('edge')) return 'Edge';
  if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
  return 'Unknown Browser';
}
