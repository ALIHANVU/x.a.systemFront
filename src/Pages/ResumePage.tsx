import { Avatar, Button } from "@mui/material";
import styled from "./ResumePage.module.css";
import ResumeCreate from "../widgets/ResumeCreater/ResumeCreater";

const ResumePage = () => {
  const notResume = true;

  if (notResume) {
    return (
      <div className={styled.createBlock}>
        <ResumeCreate />
      </div>
    );
  }

  return (
    <div>
      <div className={styled.pageContainer}>
        <div className={styled.resumeInfo}>
          <div className={styled.workerTextInfo}>
            <div>
              <h1 className={styled.workerSpecialization}>
                Frontend-developer
              </h1>
              <h3 className={styled.workerName}>Абубакар Юнусов</h3>
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
        <div className={styled.workerSkillsAndUpdateButton}>
          <div className={styled.workerSkills}>
            <h2>Навыки</h2>
            <p className={styled.skillsText}>
              javascript, typescript,next 13+, react 16+ , react query, , react
              context, react hooks, redux toolkit, redux, mobx, css modules,
              style-component, webpack, vite, jest, npm, git.
            </p>
          </div>
          <div className={styled.updateButton}>
            <Button  >Редактировать</Button>
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
            sass, less, webpack, zustand, styled components, redux thunk, redux
            saga, next, js, api, html, ui, rest api, css, docker, scss, cd/ci,
            unit test, ui/ux, figma, websocket, html5, css3, es6, spa, react
            hooks, TailwindCSS, MaterialUI
            <br />
            <br />
            Часть проектов над которыми я работал уже в релизе и указаны в графе
            опыт работы.
            <br />
            <br />
            telegram: @Abubakar_Yunusov - желательный способ связи
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
