import { Button, Dialog } from "@mui/material";
import { Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "./ResumeModal.module.css";

const ResumeModal = () => {
  return (
    <>
      <Dialog
        open={true}
        children={
          <div className={styled.container}>
            <div className={styled.specialContainer}>
              <h2>Специальность</h2>
              <Input size="large" />
            </div>
            <div className={styled.skillsContainer}>
              <h2>Навыки</h2>
              <TextArea rows={3} />
            </div>
            <div className={styled.aboutMeContainer}>
              <h2>Обо мне</h2>
              <TextArea rows={5} />
            </div>
            <div className={styled.contactContainer}>
              <h2>Контакты</h2>
              <Input
                className={styled.mailInput}
                size="large"
                placeholder="Эл.почта"
                type="email"
              ></Input>
              <Space.Compact>
                <Input style={{ width: "70px" }} defaultValue="+7" />
                <Input
                  size="large"
                  style={{ width: "150px" }}
                  defaultValue=""
                />
              </Space.Compact>
            </div>
            <div className={styled.buttonContainer}>
              <Button className={styled.button} variant="contained">
                Принять
              </Button>
              <Button className={styled.button} variant="contained">
                Отмена
              </Button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default ResumeModal;
