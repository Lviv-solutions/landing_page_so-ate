'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
// ----------------------------------------------------------------------
export function ToolbarItem({ sx, icon, label, active, disabled, ...other }) {
    const ariaLabel = other['aria-label'];
    const renderItem = () => (_jsxs(ItemRoot, { disableRipple: true, disableTouchRipple: true, disabled: disabled, active: active, sx: sx, ...other, children: [icon && _jsx(SvgIcon, { sx: { fontSize: 18 }, children: icon }), label && label] }));
    if (ariaLabel) {
        return _jsx(Tooltip, { title: ariaLabel, children: renderItem() });
    }
    return renderItem();
}
// ----------------------------------------------------------------------
const ItemRoot = styled(ButtonBase, {
    shouldForwardProp: (prop) => !['active', 'disabled', 'sx'].includes(prop),
})(({ theme }) => ({
    ...theme.typography.body2,
    width: 28,
    height: 28,
    padding: theme.spacing(0, 0.75),
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
    '&:hover': {
        backgroundColor: theme.vars.palette.action.hover,
    },
    variants: [
        {
            props: (props) => !!props.active,
            style: {
                backgroundColor: theme.vars.palette.action.selected,
                border: `solid 1px ${theme.vars.palette.action.hover}`,
            },
        },
        {
            props: (props) => !!props.disabled,
            style: {
                opacity: 0.48,
                cursor: 'default',
                pointerEvents: 'none',
            },
        },
    ],
}));
