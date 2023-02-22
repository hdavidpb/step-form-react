import { useEffect } from "react";
import { createProductsAdapter } from "./adapters/adapters";
import { ContentData } from "./interfaces/interfaces";
import { MultiStepForm } from "./pages/MultiStepForm";

function App() {
  useEffect(() => {
    fetch(import.meta.env.VITE_API)
      .then((response) => response.json())
      .then((data: ContentData) => {
        console.log(createProductsAdapter(data));
      });
  }, []);
  return <MultiStepForm />;
}

export default App;
