import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LessonControlButtons({
  floatEnd,
}: {
  floatEnd: boolean;
}) {
  return (
    <div
      className={`d-flex ${
        floatEnd ? "float-end" : "ms-auto"
      } align-items-center`}
    >
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
