import styled from "./Header.module.css";
import userIcon from "../../../assets/user-circle-svgrepo-com (1).svg";
import { AuthModal } from "../../autgForm";
import { useCallback, useRef, useState } from "react";
import { UserModal } from "../../UserModal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openRegModal, setOpenRegModal] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const enterButtonRef = useRef<HTMLDivElement>(null);
  const positionEnterButtonRef = enterButtonRef.current && {
    enterButtonTopPosithion: enterButtonRef.current.offsetTop,
    enterButtonLeftPosithion: enterButtonRef.current.offsetLeft,
  };
  const handleOpenModal = () => {
    setOpenRegModal(true);
  };

  const handleAuth = () => {
    setIsAuth(true);
  };

  const handleExitProfile = () => {
    setIsAuth(false);
    setOpenUserModal(false);
  };

  console.log(isAuth);

  const handleCloseModal = useCallback(() => {
    setOpenRegModal(false);
  }, []);

  const handleOpenAndCloseUserModal = () => {
    setOpenUserModal(!openUserModal);
  };

  return (
    <header className={styled.headerContainer}>
      <div className={styled.leftBlock}>
        <nav className={styled.havigation}>
          <Link to="/">
            <a>Специалисты</a>
          </Link>

          <a>Чаты</a>
        </nav>
      </div>
      <div className={styled.headerLogo}>X.A.System</div>
      <div className={styled.rigthBlock}>
        <span
          ref={enterButtonRef}
          className={styled.headerName}
          onClick={isAuth ? handleOpenAndCloseUserModal : handleOpenModal}
        >
          {isAuth ? "Абубакар Юнусов" : "Войти"}
        </span>
        <img className={styled.userIcon} src={userIcon} alt="" />
      </div>
      <AuthModal
        AuthFunc={handleAuth}
        closeModalFunction={handleCloseModal}
        isOpen={openRegModal}
      />
      {openUserModal && (
        <UserModal
          exitProfile={handleExitProfile}
          topPosithion={positionEnterButtonRef?.enterButtonTopPosithion}
          rightPosithion={positionEnterButtonRef?.enterButtonLeftPosithion}
        />
      )}
    </header>
  );
};
