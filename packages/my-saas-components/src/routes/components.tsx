import type { LinkProps } from '@mui/material/Link';

import { forwardRef } from 'react';
import Link from '@mui/material/Link';

export const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function RouterLink(props, ref) {
    return <Link ref={ref} {...props} />;
  }
);
