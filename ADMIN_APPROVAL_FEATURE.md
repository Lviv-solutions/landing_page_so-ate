# Business Registration – Admin Approval Feature

## Overview
This document describes the implementation of the Business Registration Admin Approval feature, which allows administrators to review and approve/reject business claim requests through a dedicated admin panel.

## Features Implemented

### 1. **Role-Based Authentication System**
- Added `UserRole` type with three roles: `USER`, `ADMIN`, `BUSINESS_OWNER`
- Implemented role management functions in `lib/auth.ts`:
  - `setUserRole(role: UserRole)` - Set user role
  - `getUserRole()` - Get current user role
  - `isAdmin()` - Check if user is admin
  - `isBusinessOwner()` - Check if user is business owner

**File:** `@/Users/mohamedayman/landing_page_so-ate/lib/auth.ts`

### 2. **Admin-Only Navigation Link**
- Added admin panel button to header navigation
- Button is only visible when `isAdmin()` returns true
- Styled with purple gradient to distinguish from other buttons
- Includes animated icon for visual appeal

**File:** `@/Users/mohamedayman/landing_page_so-ate/app/components/Header.tsx`

### 3. **Route Protection Component**
- Created `AdminRoute` component to protect admin pages
- Checks user authorization on mount
- Shows loading state while checking
- Displays "Access Denied" message for non-admin users
- Automatically redirects unauthorized users to home page after 2 seconds

**File:** `@/Users/mohamedayman/landing_page_so-ate/app/components/AdminRoute.tsx`

### 4. **Enhanced Admin Claims Page**
- Wrapped with `AdminRoute` for access control
- Added business details to the table:
  - **Business Name** - Shows English or Arabic name from claim data
  - **Owner Email** - Displays email from business data
  - Existing columns: Claim ID, Requester ID, Status, Submitted Date, Actions
- Maintains all existing functionality:
  - List pending/approved/rejected claims with tabs
  - Approve/Reject actions with confirmation dialogs
  - Optimistic UI updates
  - Loading and error states

**File:** `@/Users/mohamedayman/landing_page_so-ate/app/[locale]/admin/claims/page.tsx`

### 5. **Developer Testing Utility**
- Created `AdminRoleToggle` component for easy role switching during development
- Fixed position toggle in bottom-right corner
- Allows switching between USER, ADMIN, and BUSINESS_OWNER roles
- Automatically reloads page after role change

**File:** `@/Users/mohamedayman/landing_page_so-ate/app/components/AdminRoleToggle.tsx`

### 6. **Internationalization Support**
- Added translation keys for admin panel in both English and Arabic
- English: "Admin Panel"
- Arabic: "لوحة الإدارة"

**Files:**
- `@/Users/mohamedayman/landing_page_so-ate/public/locales/en/common.json`
- `@/Users/mohamedayman/landing_page_so-ate/public/locales/ar/common.json`

## How to Use

### For Development/Testing

1. **Enable Admin Role:**
   Add the `AdminRoleToggle` component to your layout or page:
   ```tsx
   import AdminRoleToggle from "@/app/components/AdminRoleToggle";
   
   // In your component
   <AdminRoleToggle />
   ```

2. **Toggle to Admin Role:**
   - Click the "Admin" button in the dev tools panel
   - Page will reload with admin privileges
   - Admin Panel button will appear in the header

3. **Access Admin Panel:**
   - Click the "Admin Panel" button in the header
   - Or navigate directly to `/[locale]/admin/claims`

### For Production

1. **Set User Role via Backend:**
   When a user logs in, set their role based on your authentication system:
   ```typescript
   import { setUserRole } from '@/lib/auth';
   
   // After successful authentication
   setUserRole('ADMIN'); // or 'USER' or 'BUSINESS_OWNER'
   ```

2. **Admin Access:**
   - Only users with `ADMIN` role can see the admin panel link
   - Only users with `ADMIN` role can access `/admin/*` routes
   - Non-admin users are redirected with an error message

## Admin Claims Page Features

### Table Columns
1. **Claim ID** - Unique identifier for the claim request
2. **Business Name** - English or Arabic business name from claim data
3. **Owner Email** - Contact email from business data
4. **Requester ID** - User who submitted the claim (truncated)
5. **Status** - Current status with color-coded chip
6. **Submitted** - Date when claim was created
7. **Actions** - Approve/Reject buttons (only for pending claims)

### Status Types
- **PENDING** (Yellow) - Awaiting review
- **APPROVED** (Green) - Claim approved, business created
- **REJECTED** (Red) - Claim rejected with reason

### Actions
- **Approve** - Creates business and assigns to requester
- **Reject** - Requires rejection reason, updates status

### Tabs
- **Pending** - Shows only pending claims
- **Approved** - Shows approved claims
- **Rejected** - Shows rejected claims

## Backend Integration

The frontend is ready and connects to the gRPC service via `claimRequestService.ts`. The service expects:

### gRPC Endpoints (via Envoy)
- `ListClaimRequests` - Get all claim requests with filtering
- `ApproveClaimRequest` - Approve a claim and create business
- `RejectClaimRequest` - Reject a claim with reason

### Expected Backend Implementation
You need to implement the gRPC service handlers in your Go backend:

1. **Service Location:** Based on proto file at `api/proto/business/v1/claim_request.proto`
2. **Service Name:** `ClaimRequestService`
3. **Methods to Implement:**
   - `ListClaimRequests` - Return list of claims with pagination
   - `ApproveClaimRequest` - Create business, update claim status
   - `RejectClaimRequest` - Update claim status with rejection reason

### Envoy Configuration
Configure Envoy to expose gRPC endpoints as REST/JSON:
- Map gRPC methods to HTTP endpoints
- Add CORS headers for web access
- Ensure admin authorization via JWT/metadata

Example Envoy route configuration:
```yaml
routes:
  - match:
      prefix: "/business.v1.ClaimRequestService"
    route:
      cluster: grpc_backend
      timeout: 30s
```

## Security Considerations

### Current Implementation (Development)
- Role stored in localStorage (temporary solution)
- Easy to bypass for testing purposes
- **NOT suitable for production**

### Production Requirements
1. **Implement proper authentication:**
   - JWT tokens with role claims
   - Server-side session management
   - Secure token storage

2. **Backend Authorization:**
   - Verify admin role on every API call
   - Check JWT claims or session data
   - Return 403 for unauthorized requests

3. **Frontend Protection:**
   - Current implementation is UI-only
   - Backend MUST enforce authorization
   - Frontend protection prevents UI confusion only

## File Structure

```
landing_page_so-ate/
├── lib/
│   └── auth.ts                          # Role management functions
├── app/
│   ├── components/
│   │   ├── Header.tsx                   # Updated with admin link
│   │   ├── AdminRoute.tsx               # Route protection component
│   │   └── AdminRoleToggle.tsx          # Dev testing utility
│   └── [locale]/
│       └── admin/
│           └── claims/
│               └── page.tsx             # Admin claims review page
├── services/
│   └── claimRequestService.ts           # gRPC client (already exists)
├── public/
│   └── locales/
│       ├── en/common.json               # English translations
│       └── ar/common.json               # Arabic translations
└── api/
    └── proto/
        └── business/
            └── v1/
                └── claim_request.proto  # Proto definition (already exists)
```

## Testing Checklist

- [ ] Admin role toggle works and persists
- [ ] Admin panel link appears only for admin users
- [ ] Non-admin users cannot access `/admin/claims`
- [ ] Claims list loads successfully
- [ ] Business name and email display correctly in table
- [ ] Approve action works and updates UI
- [ ] Reject action requires reason and works
- [ ] Tab filtering works (Pending/Approved/Rejected)
- [ ] Translations work in both English and Arabic
- [ ] Access denied page shows for non-admin users

## Next Steps

### Backend Implementation Required
1. Implement gRPC service handlers in Go backend
2. Configure Envoy proxy for REST/JSON endpoints
3. Add JWT-based authentication
4. Implement admin role verification in backend

### Future Enhancements
1. Add email notifications for claim decisions
2. Add claim history/audit log
3. Add bulk approve/reject functionality
4. Add search and advanced filtering
5. Add export to CSV functionality
6. Add claim details modal with full business information

## Support

For questions or issues, refer to:
- Proto definition: `api/proto/business/v1/claim_request.proto`
- Service client: `services/claimRequestService.ts`
- Existing claims page: `app/[locale]/admin/claims/page.tsx`
