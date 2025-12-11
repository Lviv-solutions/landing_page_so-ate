import type { Slide } from 'yet-another-react-lightbox';
export type UseLightboxReturn = {
    open: boolean;
    selected: number;
    onClose: () => void;
    onOpen: (slideUrl: string) => void;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
};
export declare function useLightbox(slides: Slide[]): UseLightboxReturn;
//# sourceMappingURL=use-lightbox.d.ts.map