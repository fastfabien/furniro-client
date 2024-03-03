import React from "react";
import { H1, LayoutContainer, LayoutContent } from "../../../Styles";

interface AdminLayoutProps {
  children: React.ReactNode;
  pageName: string;
}

export const AdminLayout = ({ children, pageName }: AdminLayoutProps) => {
  return (
    <>
      <LayoutContainer>
        <LayoutContent>
          <H1>{pageName}</H1>
        </LayoutContent>
      </LayoutContainer>
      {children}
    </>
  );
};
