import "./App.css";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {


  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <div>
        <AdminPanel token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmZkN2I2ZjhiY2FkNmU1MDI0MTc1MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTA1Mzc5NiwiZXhwIjoxNzQ1MTQwMTk2fQ.OGYFfAr_3HKZyDfrmN4685keT2Wc4OdQitOKBEVthnU'} />
      </div>
    </section>
  );
}

export default App;
