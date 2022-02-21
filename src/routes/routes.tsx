import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateJob from "../pages/CreateJob";
import Detail from "../pages/DetailPage";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Profile from "../pages/Resume/Profile";
// import your route components too
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="create" element={<CreateJob />} />
        <Route path="resume" element={<Resume />}/>
        <Route path="resume/profile" element={<Profile/>}/>  
        {/* <Route index element={<Home />} /> */}
        {/* 
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
