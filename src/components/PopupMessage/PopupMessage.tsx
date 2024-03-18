import React, { useEffect, useState } from "react";
import { SuccessMessage } from "../../Styles";
import { Link } from "react-router-dom";

export const PopupMessage = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible ? (
        <SuccessMessage>
          Product added to Card, <Link to="/shop/cart">View cart</Link>
        </SuccessMessage>
      ) : (
        ""
      )}
    </>
  );
};
