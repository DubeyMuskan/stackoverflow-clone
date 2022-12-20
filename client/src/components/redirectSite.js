import React from "react";

import Link from "./Link";

const DeliveryLink = () => {
  const getUrl = () => {
    return `https://stackoverflow.com`;
  };

  return (
    <Link url={getUrl()} title={"Click and check your solution"} />
  );
};

export default DeliveryLink;