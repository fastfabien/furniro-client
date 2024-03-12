import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { BreadcrumbProps } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { BreadCrumbContainer, Li, Ol } from "../../Styles";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadCrumbContainer aria-label="Breadcrumb">
      <Ol className="breadcrumb">
        {items.map((item, index) => (
          <>
            <Li key={index} className="breadcrumb-item">
              {index < items.length - 1 ? ( // Check if not the last item
                <Link to={item.url}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </Li>
            {index === 0 && <FontAwesomeIcon icon={faGreaterThan} />}
          </>
        ))}
      </Ol>
    </BreadCrumbContainer>
  );
};
