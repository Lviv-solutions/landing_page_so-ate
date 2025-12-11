'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeClasses } from 'minimal-shared/utils';
import { styled } from '@mui/material/styles';
import { navSectionClasses } from '../styles';
// ----------------------------------------------------------------------
export const Nav = styled('nav') ``;
export const NavLi = styled((props) => (_jsx("li", { ...props, className: mergeClasses([navSectionClasses.li, props.className]) })), { shouldForwardProp: (prop) => !['disabled', 'sx'].includes(prop) })(() => ({
    display: 'inline-block',
    variants: [{ props: { disabled: true }, style: { cursor: 'not-allowed' } }],
}));
export const NavUl = styled((props) => (_jsx("ul", { ...props, className: mergeClasses([navSectionClasses.ul, props.className]) })))(() => ({ display: 'flex', flexDirection: 'column' }));
