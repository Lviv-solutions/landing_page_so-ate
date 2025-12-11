import { addCollection } from "@iconify/react";
// ----------------------------------------------------------------------
// Basic icon set - can be extended with more icons as needed
const basicIcons = {
    "solar:home-bold": {
        body: '<path fill="currentColor" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.522c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.866l-2 1.241C3.987 6.286 3.038 6.874 2.52 7.823Z"/>',
        width: 24,
        height: 24,
    },
    "solar:user-bold": {
        body: '<circle cx="12" cy="6" r="4" fill="currentColor"/><path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"/>',
        width: 24,
        height: 24,
    },
};
export const iconSets = [
    {
        prefix: "solar",
        icons: basicIcons,
    },
];
export const allIconNames = Object.keys(basicIcons);
// ----------------------------------------------------------------------
let iconsRegistered = false;
export function registerIcons() {
    if (iconsRegistered)
        return;
    iconSets.forEach((iconSet) => {
        addCollection(iconSet);
    });
    iconsRegistered = true;
}
