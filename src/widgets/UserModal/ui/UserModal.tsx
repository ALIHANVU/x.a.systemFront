import { FC, useState } from "react";
import styled from "./UserModal.module.css";
import UserProfile from "../../UserProfile/UserProfile";
import { Link } from "react-router-dom";

interface UserModalProps {
  topPosithion?: number;
  rightPosithion?: number;
  exitProfile: () => void;
}

export const UserModal: FC<UserModalProps> = ({
  topPosithion,
  rightPosithion,
  exitProfile,
}) => {
  const [openUserUpdateModal, setOpenUpdateModal] = useState(false);

  const leftPosithion = rightPosithion && rightPosithion - 20;
  const updateTopPosithion = topPosithion && topPosithion + 50;

  const handleOpenAndCloseUpdateModal = () => {
    setOpenUpdateModal(!openUserUpdateModal);
  };

  const exitButtonFunc = () => {
    exitProfile();
  };

  return (
    <>
      <div
        style={{ top: updateTopPosithion, left: leftPosithion }}
        className={styled.modalContainer}
      >
        <p onClick={handleOpenAndCloseUpdateModal} className={styled.modalText}>
          Изменить профиль
        </p>
        <Link to="/resume">
          <p className={styled.modalText}>Резюме</p>
        </Link>
        <p onClick={exitButtonFunc} className={styled.modalText}>
          Выйти
        </p>
      </div>

      <UserProfile
        updateDialogOpenState={handleOpenAndCloseUpdateModal}
        isOpen={openUserUpdateModal}
      />
    </>
  );
};
