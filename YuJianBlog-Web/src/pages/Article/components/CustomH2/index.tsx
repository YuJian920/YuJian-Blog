import "../../index.less";

const CustomH2 = ({ children, ...props }: any) => {
  return (
    <h2 className="customH2">
      <span>{children}</span>
    </h2>
  );
};

export default CustomH2;
