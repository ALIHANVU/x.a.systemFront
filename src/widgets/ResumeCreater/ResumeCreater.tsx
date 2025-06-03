import { Button } from "@mui/material";
import styled from "./ResumeCreater.module.css";

const ResumeCreate = () => {
  return (
    <div className={styled.createResumeContainer}>
      <Button
        sx={{ p: 2 }}
        className={styled.createResumeButton}
        variant="contained"
      >
        Создать объявление
      </Button>
    </div>
  );
};

export default ResumeCreate;
