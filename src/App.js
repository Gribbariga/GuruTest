


import "./style/style.scss";

import AdsList from "./components/adsList/AdsList";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {
  return (
    <>
        <ErrorBoundary>
          <AdsList/>
        </ErrorBoundary>
    </>
  )
}

export default App;
