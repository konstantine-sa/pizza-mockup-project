import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={288}
    height={566}
    viewBox="0 0 288 566"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="292" rx="10" ry="10" width="288" height="28" />
    <rect x="0" y="336" rx="10" ry="10" width="288" height="104" />
    <rect x="1" y="467" rx="10" ry="10" width="80" height="28" />
    <rect x="113" y="459" rx="25" ry="25" width="175" height="42" />
    <circle cx="148" cy="143" r="115" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
