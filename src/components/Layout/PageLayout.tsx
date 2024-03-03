import React from "react";
import { H1, HouseLogo, LayoutContainer, LayoutContent } from "../../Styles";
import { Breadcrumb } from "../BreadCrumbs";
import { BreadcrumbItem } from "../../common";
import houseLogo from "../../assets/image/MeubelHouse_Logos-05.png";

interface PageLayoutProps {
  children: React.ReactNode;
  pageName: string;
}

export const PageLayout = ({ children, pageName }: PageLayoutProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { url: "/", label: "Home" },
    { url: "/shop", label: "shop" },
  ];
  return (
    <>
      <LayoutContainer>
        <LayoutContent>
          <HouseLogo src={houseLogo} />
          <H1>{pageName}</H1>
          <Breadcrumb items={breadcrumbItems} />
        </LayoutContent>
      </LayoutContainer>
      {children}
    </>
  );
};
