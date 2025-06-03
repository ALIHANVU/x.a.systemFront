import styled from "./UserCard.module.css";
import { Avatar, Rating } from "@mui/material";
import commetnIcon from "../../../assets/comment-alt-lines-svgrepo-com.svg";

export const UserCard = () => {
  return (
    <div className={styled.userCard}>
      <div className={styled.userInfo}>
        <Avatar style={{ borderRadius: 10 }} sx={{ width: 130, height: 130 }} />

        <div className={styled.userHeaderText}>
          <h2>Frontend-developer</h2>
          <h3>Юнусов Абубакар</h3>
          <div className={styled.userRating}>
            <Rating defaultValue={3.75} precision={0.01} readOnly />
            <p className={styled.ratingNum}>3.75</p>
          </div>
          <div className={styled.commentContainer}>
            <img style={{ width: 30 }} src={commetnIcon} alt="" />
            <p>30</p>
          </div>
        </div>
      </div>
      <hr style={{ marginBottom: 20 }} />
      <div className={styled.skillInfo}>
        Web разработчик 4 годами опыта разработки на react. В frontend
        разработке использовал: typescript, javascript, react, redux, redux
        toolkit, rtk query, sass, less, webpack, zustand, styled components,
        redux thunk, redux saga, next, js, api, html, ui, rest api, css, docker,
        scss, cd/ci, unit test, ui/ux, figma, websocket, html5, css3, es6, spa,
        react hooks, TailwindCSS, MaterialUI Часть проектов над которыми я
        работал уже в релизе и указаны в графе опыт работы. telegram:
        @Abubakar_Yunusov - желательный способ связи
      </div>
    </div>
  );
};
