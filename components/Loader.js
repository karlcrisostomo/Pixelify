import ContentLoader from "react-content-loader";

const Loader = ({ id }) => (
  <ContentLoader className=" mx-auto"
    id={id}
    speed={3}
    width={200}
    height={350}
    viewBox="0 0 400 460"
    backgroundColor="#d6d6d6"
    foregroundColor="#bab0b0"
  >
    <rect x="3" y="34" rx="11" ry="11" width="372" height="372" />
  </ContentLoader>
);

export default Loader;
