import { useDispatch } from "react-redux";
import { BreadCrumbItem } from "./breadcrumbItem";
import { changeBreadcrumb } from "./features/breadcrumbsSlice";

export default function updateBreadcrumbs(breadcrumbItems: BreadCrumbItem[]) {
    const reduxDispatch = useDispatch();
    reduxDispatch(changeBreadcrumb(breadcrumbItems));
}