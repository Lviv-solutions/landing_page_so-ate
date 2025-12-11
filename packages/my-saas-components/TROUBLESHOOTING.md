# @my-saas/components Troubleshooting

This guide helps you resolve issues specific to the `@my-saas/components` package.

## Common Issues

### Component Import Errors

**Problem: Component not found**
```typescript
Module '"@my-saas/components"' has no exported member 'ComponentName'
```

**Solution:**
1. Check if the component is exported in `src/index.ts`
2. Verify the component exists in the package
3. Check for typos in the component name

```typescript
// Check exports in packages/my-saas-components/src/index.ts
export * from './component-name';
```

### React Hook Form Components

**Problem: Controller or useFormContext not found**
```typescript
'Controller' is not exported from 'react-hook-form'
```

**Solution:**
This is usually a version compatibility issue. The components are designed for react-hook-form v7+.

```bash
# Check your react-hook-form version
npm list react-hook-form

# Update if needed
npm install react-hook-form@^7.0.0
```

**Temporary workaround:**
If you need to use an older version, some hook-form components are temporarily disabled:
- `RHFUpload` components are commented out due to compatibility issues

### MUI Styled Components

**Problem: Server/Client component mismatch**
```typescript
Attempted to call styled.js from the server, but it's on the client
```

**Solution:**
All styled components in this package already have `'use client';` directive. If you're still seeing this error:

1. Make sure you're importing from the package, not local files
2. Check if you have duplicate components in your local codebase
3. Clear your build cache:

```bash
rm -rf .next
npm run dev
```

### Animation Components

**Problem: Framer Motion SSR issues**
```typescript
ReferenceError: window is not defined
```

**Solution:**
Animation components are client-side only. Make sure they're properly wrapped:

```typescript
'use client';

import { MotionContainer } from '@my-saas/components';

function MyComponent() {
  return (
    <MotionContainer>
      {/* Your content */}
    </MotionContainer>
  );
}
```

### Image Component Issues

**Problem: Image not loading or showing placeholder**

**Solution:**
1. Check if the image URL is accessible
2. Verify CORS settings for external images
3. Use proper image formats (jpg, png, webp, etc.)

```typescript
import { Image } from '@my-saas/components';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  sx={{ width: 200, height: 200 }}
/>
```

### Chart Components

**Problem: Chart not rendering**
```typescript
Cannot read properties of undefined (reading 'data')
```

**Solution:**
Ensure you're passing the correct data format:

```typescript
import { Chart } from '@my-saas/components';

const chartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    data: [10, 20, 30],
    // ... other dataset properties
  }]
};

<Chart type="line" data={chartData} />
```

### Upload Components

**Problem: Upload component not working**

**Note:** Upload components are temporarily disabled due to react-hook-form compatibility issues.

**Alternative solution:**
Use the base upload components directly:

```typescript
import { UploadBox } from '@my-saas/components';

<UploadBox
  onDrop={(files) => {
    // Handle file upload
  }}
/>
```

### Navigation Components

**Problem: Navigation classes undefined**
```typescript
Cannot read properties of undefined (reading 'ul')
```

**Solution:**
Make sure you're importing the complete navigation system:

```typescript
import { 
  NavSection,
  NavItem,
  navSectionClasses 
} from '@my-saas/components';
```

### Country Select Issues

**Problem: Countries data not found**

**Solution:**
The countries data is included in the package. If you're getting import errors:

```typescript
// ✅ Correct import
import { CountrySelect } from '@my-saas/components';

// ❌ Don't import countries directly unless needed
// import { countries } from '@my-saas/components/data/countries';
```

### Editor Component

**Problem: TipTap editor not loading**

**Solution:**
Make sure all TipTap dependencies are installed:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-*
```

The editor component requires several TipTap extensions that should be automatically installed with the package.

### Phone Input Issues

**Problem: Phone validation not working**

**Solution:**
The phone input uses `react-phone-number-input`. Make sure the value format is correct:

```typescript
import { PhoneInput } from '@my-saas/components';

const [phone, setPhone] = useState('');

<PhoneInput
  value={phone}
  onChange={setPhone}
  defaultCountry="US"
/>
```

## Development Tips

### Adding New Components

When adding new components to the package:

1. Create the component in the appropriate directory
2. Add exports to the relevant `index.ts` files
3. Add `'use client';` if the component uses hooks or browser APIs
4. Include proper TypeScript types

```typescript
// packages/my-saas-components/src/my-component/index.ts
export * from './my-component';
export type * from './types';

// packages/my-saas-components/src/index.ts
export * from './my-component';
```

### Testing Components

To test components locally:

```bash
# In the package directory
npm run build

# In your app directory
npm run dev
```

### Debugging Import Issues

Use these commands to debug import problems:

```bash
# Check what's exported from the package
node -e "console.log(Object.keys(require('./packages/my-saas-components/dist')))"

# Check TypeScript compilation
npm run type-check

# Verbose build to see what's happening
npm run build -- --verbose
```

## Performance Considerations

### Bundle Size

Some components are heavy and should be imported carefully:

```typescript
// ❌ Imports everything
import * as Components from '@my-saas/components';

// ✅ Import only what you need
import { Button, TextField } from '@my-saas/components';
```

### Lazy Loading

For heavy components like Editor or Chart:

```typescript
import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('@my-saas/components').then(m => ({ default: m.Editor })));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Editor />
    </Suspense>
  );
}
```

## Getting Help

If you're still having issues:

1. Check the component's source code in `packages/my-saas-components/src/`
2. Look at usage examples in the Next.js app
3. Create a minimal reproduction case
4. Check for similar issues in the main troubleshooting guide
