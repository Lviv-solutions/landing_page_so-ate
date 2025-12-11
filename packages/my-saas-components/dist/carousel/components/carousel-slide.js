'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import { getSlideSize } from '../utils';
import { carouselClasses } from '../classes';
// ----------------------------------------------------------------------
export function CarouselSlide({ sx, options, children, className, ...other }) {
    const slideSize = getSlideSize(options?.slidesToShow);
    return (_jsx(CarouselSlideRoot, { axis: options?.axis ?? 'x', slideSpacing: options?.slideSpacing, className: mergeClasses([carouselClasses.slide.root, className]), sx: [{ flex: slideSize }, ...(Array.isArray(sx) ? sx : [sx])], ...other, children: options?.parallax ? (_jsx("div", { className: carouselClasses.slide.content, children: _jsx("div", { className: carouselClasses.slide.parallax, children: children }) })) : (children) }));
}
// ----------------------------------------------------------------------
const CarouselSlideRoot = styled('li', {
    shouldForwardProp: (prop) => !['axis', 'slideSpacing', 'sx'].includes(prop),
})(({ slideSpacing }) => ({
    display: 'block',
    position: 'relative',
    [`& .${carouselClasses.slide.content}`]: {
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 'inherit',
    },
    variants: [
        { props: { axis: 'x' }, style: { minWidth: 0, paddingLeft: slideSpacing } },
        { props: { axis: 'y' }, style: { minHeight: 0, paddingTop: slideSpacing } },
    ],
}));
