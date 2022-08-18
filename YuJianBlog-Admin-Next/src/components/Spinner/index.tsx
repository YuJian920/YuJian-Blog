import SpinnerComponents from "./components/Spinner";
import type { LoadingHocPropsType } from "./type";

const BoxStyle = { width: "100%", height: "100%" };

const SpinnerHoc = ({ loading, children }: LoadingHocPropsType) => {
  return loading ? (
    <div style={BoxStyle}>
      <SpinnerComponents />
    </div>
  ) : (
    <>{children}</>
  );
};

export default SpinnerHoc;
