import Headingg from "./component/Heading";
import Content from "./component/Content";
import ClockTime from "./component/ClockTime";

function App(){
  return <div className="container">
    <div className="row cs-row">
      <div className="col-md-12">
        <Headingg></Headingg>
      </div>
      <div className="col-md-8 contentSection">
        <Content></Content>
        <ClockTime></ClockTime>
      </div>
    </div>
  </div>
}
export default App;