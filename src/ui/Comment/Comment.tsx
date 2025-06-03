import { Rating } from "@mui/material";
import styled from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styled.commentContainer}>
      <h4>Абубакар Юнусов</h4>
      <Rating value={4} precision={0.01} readOnly />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis
        corrupti voluptatum omnis? Deserunt at architecto eum soluta ipsam
        consequatur, est atque doloribus, consequuntur corrupti dolorum, officia
        blanditiis error deleniti.
      </p>
    </div>
  );
};
