import { useEffect } from "react";
import { createProductsAdapter } from "./adapters/adapters";
import { ContentData } from "./interfaces/interfaces";
import { MultiStepForm } from "./pages/MultiStepForm";

function App() {
  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=4Mswhysiy7Qibe4Zo0Nuxr1gzJq56Ygk_15o_-J44m0kUbzN1sMcYFZScGL1BrttAC3KoI_qulZu6EbF3jllXfOoxPKvhS6Um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLFfb6FRTjhy3MdcpNDZITEEhDonsrWkIrntjh2Ii5MDXrRkYX69jBSjSeY7GjAa_trXiUIapWTIdVcCzlMzHue0i_KBb_6Rsdz9Jw9Md8uu&lib=Mu8iWQKA4ihMHE7ZpuBkT2DC4mXYHzic9"
    )
      .then((response) => response.json())
      .then((data: ContentData) => {
        console.log(createProductsAdapter(data));
      });
  }, []);
  return <MultiStepForm />;
}

export default App;
