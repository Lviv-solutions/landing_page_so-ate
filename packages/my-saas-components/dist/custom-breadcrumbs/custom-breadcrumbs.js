"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { BackLink } from "./back-link";
import { MoreLinks } from "./more-links";
import { BreadcrumbsLink } from "./breadcrumb-link";
import { BreadcrumbsRoot, BreadcrumbsHeading, BreadcrumbsContent, BreadcrumbsContainer, BreadcrumbsSeparator, } from "./styles";
export function CustomBreadcrumbs({ sx, action, backHref, heading, slots = {}, links = [], moreLinks = [], slotProps = {}, activeLast = false, linkComponent, ...other }) {
    const lastLink = links[links.length - 1]?.name;
    const renderHeading = () => (_jsx(BreadcrumbsHeading, { ...slotProps?.heading, children: backHref ? (_jsx(BackLink, { href: backHref, label: heading, component: linkComponent })) : (heading) }));
    const renderLinks = () => slots?.breadcrumbs ?? (_jsx(Breadcrumbs, { separator: _jsx(BreadcrumbsSeparator, {}), ...slotProps?.breadcrumbs, children: links.map((link, index) => (_jsx(BreadcrumbsLink, { icon: link.icon, href: link.href, name: link.name, component: linkComponent, disabled: link.name === lastLink && !activeLast }, link.name ?? index))) }));
    const renderMoreLinks = () => _jsx(MoreLinks, { links: moreLinks, ...slotProps?.moreLinks });
    return (_jsxs(BreadcrumbsRoot, { sx: sx, ...other, children: [_jsxs(BreadcrumbsContainer, { ...slotProps?.container, children: [_jsxs(BreadcrumbsContent, { ...slotProps?.content, children: [(heading || backHref) && renderHeading(), (!!links.length || slots?.breadcrumbs) && renderLinks()] }), action] }), !!moreLinks?.length && renderMoreLinks()] }));
}
