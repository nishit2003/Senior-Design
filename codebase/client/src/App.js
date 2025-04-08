// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import HomePage from "scenes/homePage";
// import LoginPage from "scenes/loginPage";
// import ProfilePage from "scenes/profilePage";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";

// function App() {
//   const mode = useSelector((state) => state.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const isAuth = Boolean(useSelector((state) => state.token));

//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route
//               path="/home"
//               element={isAuth ? <HomePage /> : <Navigate to="/" />}
//             />
//             <Route
//               path="/profile/:userId"
//               element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
//             />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
// Import the new pages (these will resolve to index.jsx in each folder)
import Vet from "scenes/Vet";
import Adoption from "scenes/Adoption";
import Healthcare from "scenes/Healthcare";
import Walk from "scenes/Walk";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            {/* New routes for pet-related pages */}
            <Route
              path="/vet"
              element={isAuth ? <Vet /> : <Navigate to="/" />}
            />
            <Route
              path="/adoption"
              element={isAuth ? <Adoption /> : <Navigate to="/" />}
            />
            <Route
              path="/healthcare"
              element={isAuth ? <Healthcare /> : <Navigate to="/" />}
            />
            <Route
              path="/walk"
              element={isAuth ? <Walk /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
