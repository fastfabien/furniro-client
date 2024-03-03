export interface BreadcrumbItem {
  url: string;
  label: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]; // Array of breadcrumb items
}
