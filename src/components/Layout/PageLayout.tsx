import React from "react";
import {
  H1,
  HouseLogo,
  LayoutContainer,
  LayoutContent,
  LayoutFooter,
  LayoutFooterContent,
  TextBold,
  TextLight,
} from "../../Styles";
import { Breadcrumb } from "../BreadCrumbs";
import { BreadcrumbItem } from "../../common";
import houseLogo from "../../assets/image/MeubelHouse_Logos-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faShippingFast,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

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
      <LayoutFooter>
        <LayoutFooterContent>
          <FontAwesomeIcon icon={faTrophy} />
          <div>
            <TextBold>High Quality</TextBold>
            <TextLight>crefted from top materials</TextLight>
          </div>
        </LayoutFooterContent>
        <LayoutFooterContent>
          <FontAwesomeIcon icon={faCheckCircle} />
          <div>
            <TextBold>Warranty Protection</TextBold>
            <TextLight>Over 2 years</TextLight>
          </div>
        </LayoutFooterContent>
        <LayoutFooterContent>
          <FontAwesomeIcon icon={faShippingFast} />
          <div>
            <TextBold>Free Shipping</TextBold>
            <TextLight>Order over 150 $</TextLight>
          </div>
        </LayoutFooterContent>
        <LayoutFooterContent>
          <FontAwesomeIcon icon={faHeadset} />
          <div>
            <TextBold>24 / 7 Support</TextBold>
            <TextLight>Dedicated support</TextLight>
          </div>
        </LayoutFooterContent>
      </LayoutFooter>
    </>
  );
};
