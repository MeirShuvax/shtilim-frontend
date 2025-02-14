// import react from "react";
// import { Routes, Route, Navigate } from 'react-router-dom';

// import AddUser from "../../Settings/Users/AddUser";
// import Users from "../../Settings/Users/Users";
// import AddStudent from "../../Students/AddStudent";
// import UpdateUser from "../../Settings/Users/UpdateUser";

// import Students from "../../Students/Students";
// import UpdateStudent from "../../Students/UpdateStudent";
// import StudentPlans from "../../Activities/StudentPlans";

// import Groups from "../../Groups/Groups";
// import AddGroup from "../../Groups/AddGroup";
// import UpdateGroup from "../../Groups/UpdateGroup";
// import Plans from "../../Plans/Plans/Plans";
// import AddPlan from "../../Plans/AddPlan/AddPlan";
// import './Main.css'; 
// import HomePage from "../HomePage/HomePage";
// import useTitle from "../../../hooks/useTitle";



// function Main():JSX.Element {
//     useTitle("ראשי");

    
//     return (
//         <main className="main">
//             <Routes>
                
//                 <Route path="/home" element={<Navigate to = "/" /> } />
//                 <Route path="/" element={<HomePage /> } />
//                 <Route path="/users" element={<Users /> } />
//                 <Route path="/add-user" element={<AddUser /> } />
//                 <Route path="/update-user/:id" element={<UpdateUser /> } />
//                 <Route path="/students" element={<Students /> } />
//                 <Route path="/update-student/:id" element={<UpdateStudent /> } />
//                 <Route path="/add-student" element={<AddStudent /> } />
//                 <Route path="/student-plans/:id" element={<StudentPlans />} />
//                 <Route path="/plans" element={<Plans /> } />
//                 <Route path="/add-plan" element={<AddPlan /> } />
//                 <Route path="/groups" element={<Groups /> } />
//                 <Route path="/add-group" element={<AddGroup /> } />
//                 <Route path="/update-group/:id" element={<UpdateGroup /> } />
                
//             </Routes>
//         </main>
//     )

// }
// export default Main;




import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import AddUser from "../../Settings/Users/AddUser";
import Users from "../../Settings/Users/Users";
import AddStudent from "../../Students/AddStudent";
import UpdateUser from "../../Settings/Users/UpdateUser";

import Students from "../../Students/Students";
import UpdateStudent from "../../Students/UpdateStudent";
import StudentPlans from "../../Activities/StudentPlans";

import Groups from "../../Groups/Groups";
import AddGroup from "../../Groups/AddGroup";
import UpdateGroup from "../../Groups/UpdateGroup";
import Plans from "../../Plans/Plans/Plans";
import AddPlan from "../../Plans/AddPlan/AddPlan";
import './Main.css'; 
import HomePage from "../HomePage/HomePage";
import useTitle from "../../../hooks/useTitle";
import { Role} from '../../../Models/IUserModel'; // Import the Role enum and IUserModel interface
import userService from "../../../Services/UserService";

function Main(): JSX.Element {
    const isAdmin = userService.isAdmin();
    const isProgramManager = userService.isProgramManager();
    const isReporter = userService.isReporter();

  useTitle("ראשי");

  return (
    <main className="main">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />

        {isAdmin && <Route path="/users" element={<Users />} />}
        {isAdmin && <Route path="/add-user" element={<AddUser />} />}
        {isAdmin && <Route path="/update-user/:id" element={<UpdateUser />} />}
        {isAdmin && <Route path="/plans" element={<Plans />} />}
        {isAdmin && <Route path="/add-plan" element={<AddPlan />} />}
        {isAdmin && <Route path="/groups" element={<Groups />} />}
        {isAdmin && <Route path="/add-group" element={<AddGroup />} />}
        {isAdmin && <Route path="/update-group/:id" element={<UpdateGroup />} />}

        {(isProgramManager || isAdmin) && (
          <>
            <Route path="/students" element={<Students />} />
            <Route path="/update-student/:id" element={<UpdateStudent />} />
            <Route path="/add-student" element={<AddStudent />} />
          </>
        )}

        {(isReporter || isProgramManager || isAdmin) && (
          <>
            <Route path="/students" element={<Students />} />
            <Route path="/student-plans/:id" element={<StudentPlans />} />
          </>
        )}
      </Routes>
    </main>
  )
}

export default Main;
 