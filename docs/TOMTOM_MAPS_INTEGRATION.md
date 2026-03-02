# TomTom Maps Integration – Step 2 (Business Create)

This document describes the TomTom Maps integration used on **`/business/create/step2`** for the claim request flow: interactive map, search, marker placement, and storing coordinates and formatted address.

---

## 1. Overview

- **Route:** `/[locale]/business/create/step2`
- **Purpose:** Let the user select a location on the map and save latitude, longitude, and (when available) formatted address.
- **Tech:** TomTom Maps SDK for Web (v6), React, local state + IndexedDB via `businessFormDB`.

---

## 2. Required npm package

```bash
npm install @tomtom-international/web-sdk-maps
```

- **Package:** `@tomtom-international/web-sdk-maps` (Maps SDK for Web, v6).
- **Note:** This SDK is in maintenance; for new projects TomTom recommends the new [Maps SDK for JavaScript](https://docs.tomtom.com/maps-sdk-js/introduction/project-setup). The current integration uses the Web SDK for stability and existing docs.

---

## 3. Environment setup

The map and search use the TomTom API key from the environment.

1. **Variable (client-side):**
   - `NEXT_PUBLIC_TOMTOM_API_KEY` – your TomTom API key.

2. **Get a key:**
   - [How to get a TomTom API key](https://developer.tomtom.com/how-to-get-tomtom-api-key)

3. **Local env:**
   - Copy `.env.example` to `.env.local`.
   - Set `NEXT_PUBLIC_TOMTOM_API_KEY=your_key`.

4. **Security:**
   - Use `NEXT_PUBLIC_*` only for non-secret, client-side config.
   - Restrict the key in the TomTom Developer Portal (e.g. by domain) to avoid abuse.

---

## 4. Main pieces

### 4.1 `components/TomTomMapPicker.tsx`

Reusable client component that:

- Renders a TomTom map in a given container.
- **Search:** TomTom Search API (fuzzy search) to find an address and move the map + marker.
- **Click:** Map click sets the marker and updates the callback with coordinates (and optional reverse-geocode address).
- **Drag:** Draggable marker; on drag end, updates coordinates (and optional reverse-geocode address).
- **Output:** Reports `{ latitude, longitude, formattedAddress }` via `onLocationChange`.

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `initialCenter` | `[number, number]` | `[lng, lat]` for first map center |
| `initialZoom` | `number` | Initial zoom (default 14) |
| `onLocationChange` | `(result: LocationResult) => void` | Called when location is chosen/changed |
| `apiKey` | `string` (optional) | Override; otherwise uses `NEXT_PUBLIC_TOMTOM_API_KEY` |
| `searchPlaceholder` | `string` | Placeholder for the search input |
| `className` | `string` | Optional container class |
| `disabled` | `boolean` | Disable map interactions |

**Behavior:**

- If `NEXT_PUBLIC_TOMTOM_API_KEY` (or `apiKey`) is missing, the component shows a message instead of the map.
- Form state is **not** managed inside the picker; the parent updates form/DB from `onLocationChange`.

### 4.2 Step 2 page: `app/[locale]/business/create/step2/page.tsx`

- Loads saved form data (including location) from `businessFormDB` and passes initial coordinates to `TomTomMapPicker`.
- Uses **local state** for the form (no Formik/React Hook Form on this page).
- `handleMapLocationChange`: updates `locationData` with `latitude`, `longitude`, and `formattedAddress`.
- On “Next”, `handleNext` validates and calls `businessFormDB.updateStep(2, { location: locationData })`, so all fields (including `formattedAddress`) are persisted.
- Map is loaded with **dynamic import** and `ssr: false` to avoid SSR issues with the TomTom SDK.

### 4.3 Data shape: `lib/businessFormDB.ts`

`BusinessFormData.location` includes:

- `country`, `city`, `street`, `postalCode`
- `latitude`, `longitude` (strings for form compatibility)
- `formattedAddress` (optional string from map/reverse geocode)

---

## 5. Flow summary

1. User opens `/business/create/step2`.
2. Map loads with saved or default center; marker is placed.
3. User can:
   - **Search:** Type address → Search → map flies to result, marker moves, `onLocationChange` called (with Search API address when available).
   - **Click map:** Marker moves to click; reverse geocode runs if API key is set; `onLocationChange` called.
   - **Drag marker:** Same as click (coordinates + optional reverse-geocode address).
4. Step 2 form state is updated with `latitude`, `longitude`, `formattedAddress`.
5. User fills country/city/street (and optional postal code) and clicks “Next”.
6. `businessFormDB.updateStep(2, { location: locationData })` saves everything, including coordinates and `formattedAddress`.

---

## 6. Best practices and edge cases

- **API key missing:** Map is not rendered; a clear message is shown so you don’t ship a broken map in production.
- **Search / reverse geocode errors:** Handled inside `TomTomMapPicker`; parent only receives successful updates. Optional: surface a toast or inline error from the parent if you want.
- **Initial center:** Comes from saved `locationData` (lat/lng) or default (e.g. Riyadh). Pass `[lng, lat]` to `TomTomMapPicker`.
- **SSR:** Map component is loaded with `dynamic(..., { ssr: false })` to avoid “window is not defined” or SDK issues.
- **Responsiveness:** Step 2 layout uses flex and max-width so the map and form stack on small screens; map has a minimum height for usability.
- **Existing form logic:** Only step 2 was changed; validation (country, city, street) and navigation (step1 → step2 → step3) are unchanged. No Formik/React Hook Form on this page.

---

## 7. Optional: using the new TomTom Maps SDK for JavaScript

If you later switch to [@tomtom-org/maps-sdk](https://www.npmjs.com/package/@tomtom-org/maps-sdk):

- Replace map initialization and marker APIs with the new SDK’s equivalents.
- Keep the same props and `onLocationChange` contract for `TomTomMapPicker` so the step 2 page and `businessFormDB` stay unchanged.
- Search and reverse geocode can stay as REST calls to TomTom APIs, or use the new SDK’s services if available.

---

## 8. Files touched

| File | Change |
|------|--------|
| `package.json` | Added `@tomtom-international/web-sdk-maps` |
| `lib/businessFormDB.ts` | Added `formattedAddress?` to `location` |
| `components/TomTomMapPicker.tsx` | **New** – map, search, marker, reverse geocode |
| `app/[locale]/business/create/step2/page.tsx` | Replaced placeholder with `TomTomMapPicker`, sync state, responsive layout |
| `public/locales/en/common.json` | `businessForm.searchAddressPlaceholder` |
| `public/locales/ar/common.json` | Same key (Arabic) |
| `.env.example` | `NEXT_PUBLIC_TOMTOM_API_KEY` |

Ensure `.env.local` (or your env) sets `NEXT_PUBLIC_TOMTOM_API_KEY` for the map to work.
