import {
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import openEye from "../../../assets/eye-off-svgrepo-com.svg";
import closeEye from "../../../assets/eye-svgrepo-com.svg";
import xButtom from "../../../assets/icons8-x-button.svg";
import styled from "./styled.module.css";

interface AuthModalProps {
  isOpen: boolean;
  closeModalFunction: () => void;
  AuthFunc: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({
  isOpen,
  closeModalFunction,
  AuthFunc,
}) => {
  const [isRegist, setIsRegist] = useState(false);
  const [isSeePassword, setIsSeePassword] = useState(false);
  const [isSeeRepeatPassword, setIsSeeRepeatPassword] = useState(false);

  const handleCloseModal = () => {
    closeModalFunction();
    setIsRegist(false);
  };

  const handleAuth = () => {
    AuthFunc();
    closeModalFunction();
  };

  const switchModalContant = () => {
    setIsRegist(!isRegist);
    setIsSeePassword(false);
    setIsSeeRepeatPassword(false);
  };

  const handleSwitchPasswordVisible = (
    fn: (value: boolean) => void,
    value: boolean
  ) => {
    fn(value);
  };

  // useEffect(() => {
  //   if()
  // }, []);

  return (
    <Dialog
      children={
        <div className={styled.container}>
          <div onClick={handleCloseModal} className={styled.xButtom}>
            <img src={xButtom} alt="" />
          </div>
          <h2>{isRegist ? "Регистрация" : "Вход"}</h2>

          {isRegist && (
            <div className={styled.nameContainer}>
              <TextField label="Фамилия" variant="standard" />
              <TextField label="Имя" variant="standard" />
            </div>
          )}

          {isRegist && (
            <TextField label="Эл. почта" type="email" variant="standard" />
          )}

          <TextField label="Логин" variant="standard" />

          <TextField
            label="Пароль"
            type={isSeePassword ? "text" : "password"}
            variant="standard"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        handleSwitchPasswordVisible(
                          setIsSeePassword,
                          !isSeePassword
                        )
                      }
                    >
                      <img
                        style={{ width: 25 }}
                        src={isSeePassword ? closeEye : openEye}
                        alt=""
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {isRegist && (
            <TextField
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleSwitchPasswordVisible(
                            setIsSeeRepeatPassword,
                            !isSeeRepeatPassword
                          )
                        }
                      >
                        <img
                          style={{ width: 25 }}
                          src={isSeeRepeatPassword ? closeEye : openEye}
                          alt=""
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              label="Повторите пароль"
              type={isSeeRepeatPassword ? "text" : "password"}
              variant="standard"
            />
          )}

          <Button
            onClick={handleAuth}
            style={{ marginTop: 20 }}
            variant="contained"
          >
            {isRegist ? "Зарегистрироваться" : "Войти"}
          </Button>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span
              className={styled.switchModalText}
              onClick={switchModalContant}
            >
              {isRegist ? "Войти в профиль " : "Зарегистрироваться"}
            </span>
          </div>
        </div>
      }
      open={isOpen}
    />
  );
};
