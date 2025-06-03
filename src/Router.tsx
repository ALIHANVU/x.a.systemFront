import { Route, Routes } from "react-router-dom";
import { Header } from "./widgets/Headers";
import WorkerPage from "./Pages/WorkerPage";
import MainPage from "./Pages/MainPage";
import ResumePage from "./Pages/ResumePage";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/resume"
          element={
            <>
              <ResumePage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route
          path={`/worker/:id`}
          element={
            <>
              <WorkerPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
