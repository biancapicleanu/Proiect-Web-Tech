import { BrowserRouter as Router, Routes, Route } from "react-router";
import { NotFound } from "./pages/NotFound";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div class="header">
                <div class="app-title">action!</div>
            </div>
            <Router>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
