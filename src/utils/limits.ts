export function hasLimits(limits: any, key: any): boolean {
  if (limits === undefined) {
    return false;
  }

  return limits.allowedUsage[key] !== null;
}

export function isLimitReached(limits: any, key: any): boolean {
  if (!hasLimits(limits, key)) {
    return false;
  }

  return limits.currentUsage[key] >= limits.allowedUsage[key];
}
