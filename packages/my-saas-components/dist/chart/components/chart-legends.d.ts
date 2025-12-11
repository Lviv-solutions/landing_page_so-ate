export type ChartLegendsProps = React.ComponentProps<typeof ListRoot> & {
    labels?: string[];
    colors?: string[];
    values?: string[];
    sublabels?: string[];
    icons?: React.ReactNode[];
    slotProps?: {
        wrapper?: React.ComponentProps<typeof ItemWrapper>;
        root?: React.ComponentProps<typeof ItemRoot>;
        dot?: React.ComponentProps<typeof ItemDot>;
        icon?: React.ComponentProps<typeof ItemIcon>;
        value?: React.ComponentProps<typeof ItemValue>;
        label?: React.ComponentProps<typeof ItemLabel>;
    };
};
export declare function ChartLegends({ sx, className, slotProps, icons, values, labels, colors, sublabels, ...other }: ChartLegendsProps): import("react/jsx-runtime").JSX.Element;
declare const ListRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
declare const ItemWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
declare const ItemRoot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const ItemIcon: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const ItemDot: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const ItemLabel: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const ItemValue: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export {};
//# sourceMappingURL=chart-legends.d.ts.map