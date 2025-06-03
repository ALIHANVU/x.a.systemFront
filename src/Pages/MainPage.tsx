import { UserCard } from "../widgets/UserCard";
import styled from "./MainPage.module.css";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MainPage = () => {
  let test = [];
  for (let i = 0; i < 13; i++) {
    test.push(i);
  }
  return (
    <div>
      <div className={styled.searchBlock}>
        <Input style={{ width: "500px", padding: 10 }} placeholder="Поиск" />
        <Button
          style={{ padding: 21, fontSize: 17, marginLeft: 1 }}
          type="primary"
          icon={<SearchOutlined />}
        >
          Поиск
        </Button>
      </div>
      <div className={styled.cardContainer}>
        {test.map((_, i) => (
          <Link to={`/worker/${i}`}>
            <UserCard key={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
