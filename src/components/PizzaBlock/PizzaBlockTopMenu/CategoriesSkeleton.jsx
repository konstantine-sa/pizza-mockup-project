import React from "react";
import ContentLoader from "react-content-loader";

const CategoriesSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={590}
    height={48}
    viewBox="0 0 590 48"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="1" rx="20" ry="20" width="82" height="47" />
    <rect x="101" y="1" rx="20" ry="20" width="98" height="47" />
    <rect x="216" y="0" rx="20" ry="20" width="136" height="47" />
    <rect x="366" y="2" rx="20" ry="20" width="107" height="47" />
    <rect x="488" y="1" rx="20" ry="20" width="98" height="47" />
  </ContentLoader>
);

export default CategoriesSkeleton;
