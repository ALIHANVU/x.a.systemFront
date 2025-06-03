import {
  Autocomplete,
  Avatar,
  Button,
  Dialog,
  Rating,
  TextField,
} from "@mui/material";
import styled from "./WorkerPage.module.css";
import { Comment } from "../ui/Comment";
import leftButton from "../assets/left-chevron-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const WorkerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAndCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <div className={styled.pageContainer}>
          <Link to="/">
            <p className={styled.buttonBack}>{" < список спеалистов"}</p>
          </Link>
          <div className={styled.workerInfo}>
            <div className={styled.workerTextInfo}>
              <div>
                <h1 className={styled.workerSpecialization}>
                  Frontend-developer
                </h1>
                <h3 className={styled.workerName}>Абубакар Юнусов</h3>
                <Rating value={3.75} precision={0.01} readOnly />
              </div>
              <div className={styled.worketContactContainer}>
                <h3>Контакты:</h3>
                <div className={styled.workerContant}>
                  <p>+7(999) 999 99 99</p>
                  <p>abubakar@mail.ru</p>
                </div>
              </div>
            </div>
            <Avatar
              style={{ borderRadius: 10 }}
              sx={{ width: 200, height: 200 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styled.workerSkills}>
              <h2>Навыки</h2>
              <p className={styled.skillsText}>
                javascript, typescript,next 13+, react 16+ , react query, ,
                react context, react hooks, redux toolkit, redux, mobx, css
                modules, style-component, webpack, vite, jest, npm, git.
              </p>
            </div>
            <div className={styled.buttonContainer}>
              <Button variant="contained">cвязаться</Button>
              <Button onClick={handleOpenAndCloseModal} variant="contained">
                Оставить мнение
              </Button>
            </div>
          </div>
          <div className={styled.workerAboutMe}>
            <h2>Обо мне</h2>
            <p className={styled.aboutMeText}>
              Web разработчик 4 годами опыта разработки на react.
              <br />
              <br />В frontend разработке использовал:
              <br />
              <br />
              typescript, javascript, react, redux, redux toolkit, rtk query,
              sass, less, webpack, zustand, styled components, redux thunk,
              redux saga, next, js, api, html, ui, rest api, css, docker, scss,
              cd/ci, unit test, ui/ux, figma, websocket, html5, css3, es6, spa,
              react hooks, TailwindCSS, MaterialUI
              <br />
              <br />
              Часть проектов над которыми я работал уже в релизе и указаны в
              графе опыт работы.
              <br />
              <br />
              telegram: @Abubakar_Yunusov - желательный способ связи
            </p>
          </div>
        </div>
      </div>
      <div className={styled.commetsContainer}>
        <button className={styled.commentButton}>
          <img src={leftButton} alt="" />
        </button>
        <Comment />
        <Comment />
        <Comment />
        <button className={styled.commentButton}>
          <img style={{ rotate: "180deg" }} src={leftButton} alt="" />
        </button>
      </div>
      <Dialog
        open={isModalOpen}
        children={
          <div className={styled.modalContainer}>
            <button
              onClick={handleOpenAndCloseModal}
              className={styled.closeButton}
            >
              назад
            </button>
            <TextField
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
              multiline
            />
            <div className={styled.lowerBlock}>
              <Autocomplete
                sx={{ width: 100 }}
                renderInput={(params) => (
                  <TextField {...params} label="оценка" />
                )}
                options={[1, 2, 3, 4, 5]}
              />
              <Button onClick={handleOpenAndCloseModal}>Отправить</Button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default WorkerPage;
