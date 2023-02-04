// Jsx is the default export so mentione as separate and other exported functions written in the {}
import DifferentComponents2 from "./components/Basic/DifferentComponents2";
import Jsx, { JsxCondition, JsxConditionBlock, JsxConditionBlockWithoutElse } from "./components/Basic/Jsx1";
import Props3 from "./components/Basic/Props3";

function App() {
  return (
<>
<h1>React Basic Learing</h1>
<Jsx />
<JsxCondition />
<JsxConditionBlock />
<JsxConditionBlockWithoutElse />
<DifferentComponents2 />
<Props3 name="Aji" id={3} email="aji@gmail.com" skills={['HTML','css','React','Nextjs']} />
</>
  );
}
export default App;
