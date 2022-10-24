import LearnMorePage from "./components/LearnMorePage";

import "./components/layout.css";
import WelcomePage from "./components/WelcomePage";
import News from "./components/News";

function App() {
  return (
    <div className='gradient-bg'>
      <WelcomePage />
      <hr />
      <LearnMorePage />
      <hr />
      <News />
    </div>
  );
}

export default App;
