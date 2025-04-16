import "./App.css";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {
  return (
    <section>
      <Toaster position="top-right" reverseOrder={false} />

      <div>
        <AdminPanel />
      </div>
    </section>
  );
}

export default App;
