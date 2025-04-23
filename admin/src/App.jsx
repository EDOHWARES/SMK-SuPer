import "./App.css";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <AdminPanel
                token={
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmZkN2I2ZjhiY2FkNmU1MDI0MTc1MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTA1Mzc5NiwiZXhwIjoxNzQ1MTQwMTk2fQ.OGYFfAr_3HKZyDfrmN4685keT2Wc4OdQitOKBEVthnU"
                }
              />
            }
          />
          <Route path="*" element={<div>404 error, page not found.</div>} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
