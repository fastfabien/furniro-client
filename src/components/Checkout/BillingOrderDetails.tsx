import React, { useEffect } from "react";
import { CartItems, setToLocalString } from "../../common";
import { TdContent, TdTotal, TdTotalValue, TextLight } from "../../Styles";

interface BillingOrderDetailsProps {
  items: CartItems[];
  total: number;
}

export const BillingOrderDetails = ({
  items,
  total,
}: BillingOrderDetailsProps) => {
  useEffect(() => {}, [items, total]);
  return (
    <>
      {items ? (
        <>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <TdContent>
                  <TextLight>{item.product.name}</TextLight> x {item.quantity}
                </TdContent>
              </td>
              <td>
                <TdContent>
                  Rs.{" "}
                  {setToLocalString(
                    item.product.price * item.quantity,
                    "fr-FR"
                  )}
                </TdContent>
              </td>
            </tr>
          ))}
          <tr>
            <TdTotal>Total</TdTotal>
            <TdTotalValue>Rs. {setToLocalString(total, "fr-FR")}</TdTotalValue>
          </tr>
        </>
      ) : (
        "mandona"
      )}
    </>
  );
};
