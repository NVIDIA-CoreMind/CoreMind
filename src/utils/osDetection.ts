export type DetectedOS = 'macos' | 'windows' | 'linux' | 'other';

export interface OSInfo {
  os: DetectedOS;
  osName: string;
  isMac: boolean;
  isWindows: boolean;
  isLinux: boolean;
  actionMessage: string;
  subMessage?: string;
  canDirectDownload: boolean;
}

export function detectUserOS(): OSInfo {
  if (typeof window === 'undefined') {
    return {
      os: 'macos',
      osName: 'macOS',
      isMac: true,
      isWindows: false,
      isLinux: false,
      actionMessage: 'Download for macOS',
      canDirectDownload: true
    };
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() ||
                   window.navigator.platform?.toLowerCase() ||
                   '';

  if (platform.includes('mac') || userAgent.includes('macintosh') || userAgent.includes('mac os')) {
    return {
      os: 'macos',
      osName: 'macOS',
      isMac: true,
      isWindows: false,
      isLinux: false,
      actionMessage: 'Download for macOS',
      subMessage: 'Available for macOS (Apple Silicon)',
      canDirectDownload: true
    };
  }

  if (platform.includes('win') || userAgent.includes('windows')) {
    return {
      os: 'windows',
      osName: 'Windows',
      isMac: false,
      isWindows: true,
      isLinux: false,
      actionMessage: 'CoreMind for Windows is coming in a future release.',
      subMessage: 'CoreMind is currently available for macOS.',
      canDirectDownload: false
    };
  }

  if (platform.includes('linux') || userAgent.includes('linux') || userAgent.includes('x11')) {
    return {
      os: 'linux',
      osName: 'Linux',
      isMac: false,
      isWindows: false,
      isLinux: true,
      actionMessage: 'CoreMind is currently available for macOS.',
      subMessage: 'Linux support will be evaluated in future roadmaps.',
      canDirectDownload: false
    };
  }

  return {
    os: 'macos',
    osName: 'macOS',
    isMac: true,
    isWindows: false,
    isLinux: false,
    actionMessage: 'Download for macOS',
    subMessage: 'Available for macOS',
    canDirectDownload: true
  };
}
