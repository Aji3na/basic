// Jsx is the default export so mentione as separate and other exported functions written in the {}
import DifferentComponents2 from "./components/Basic/DifferentComponents2";
import Jsx, { JsxCondition, JsxConditionBlock, JsxConditionBlockWithoutElse } from "./components/Basic/Jsx1";
import Props3 from "./components/Basic/Props3";
import SpredingStudent from "./components/Basic/Spread4";
import ChildrenProps5 from "./components/Basic/ChildrenProps5";
import "./Assets/Sass/Common.css"
import StylingTypes6 from "./components/Basic/StylingTypes6";

function App() {
  return (
<>
<h1>React Basic Learing</h1>
<ChildrenProps5>
<Jsx />
<hr />
<JsxCondition />
<hr />
<JsxConditionBlock />
<hr />
<JsxConditionBlockWithoutElse />
<DifferentComponents2 />
<Props3 name="Aji" id={3} email="aji@gmail.com" skills={['HTML','css','React','Nextjs']} />
<SpredingStudent />
<StylingTypes6 />
</ChildrenProps5>
</>
  );
}
export default App;
