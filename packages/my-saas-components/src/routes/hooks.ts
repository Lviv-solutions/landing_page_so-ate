import { usePathname as useNextPathname } from 'next/navigation';

export function usePathname() {
  try {
    return useNextPathname();
  } catch {
    return '/';
  }
}
