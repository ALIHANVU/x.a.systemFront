import { Button, Dialog, TextField } from "@mui/material";
import styled from "./UserProfile.module.css";
import exitIcon from "../../assets/icons8-x-button.svg";
import { FC } from "react";

interface UserProfileProps {
  isOpen: boolean;
  updateDialogOpenState: () => void;
}

const UserProfile: FC<UserProfileProps> = ({
  isOpen,
  updateDialogOpenState,
}) => {
  console.log(updateDialogOpenState);

  return (
    <Dialog
      open={isOpen}
      children={
        <div className={styled.userProfileContainer}>
          <div className={styled.userProfileHeader}>
            <h2>Изменить профиль</h2>
            <div
              onClick={updateDialogOpenState}
              className={styled.exitButtonUserProfile}
            >
              <img src={exitIcon} alt="" />
            </div>
          </div>
          <div className={styled.nameContainer}>
            <TextField label="Фамилия" variant="standard" />
            <TextField label="Имя" variant="standard" />
          </div>
          <TextField label="Логин" variant="standard" />
          <TextField
            style={{ marginBottom: 20 }}
            label="Эл. почта"
            type="email"
            variant="standard"
          />
          <Button variant="contained">Изменить</Button>
        </div>
      }
    />
  );
};

export default UserProfile;
