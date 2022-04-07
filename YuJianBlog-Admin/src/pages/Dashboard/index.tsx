import { useDispatch } from "react-redux";
import { Button } from "antd";
import { cleanToken } from "../../model/user/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const onClean = () => dispatch(cleanToken());

  return (
    <>
      <h1>A Simple Blog Admin based on React and TypeScript</h1>
      <Button onClick={() => onClean()}>Clean</Button>
    </>
  );
};

export default Dashboard;
