import Expense from "../../components/widgets/expense/Expense";
import Transactions from "../../components/widgets/transactions/Transactions";
import Sales from "../../components/widgets/sales/Sales";
import "./home.scss";
import Earnings from "../../components/widgets/earnings/Earnings";
import Widget from "../../components/widgets/general/Widget";
import Metrics from "../../components/widgets/metrics/Metrics";
import Task from "../../components/widgets/task/Task";
import { Progress } from "../../components/widgets/progress/Progress";
const tasks=[{
  status:"Progress",
  date:"30 March 2023",
  title:"Check product stock",
  addedBy:"added by sumdh@comp.com"
},
{
  status:"Pending",
  date:"22 Aril 2023",
  title:"Meeting with supplier",
  addedBy:"added by gedh@comp.com"
},
{
  status:"Done",
  date:"24 March 2023",
  title:"Logo branding",
  addedBy:"added by hests@comp.com"
}]
const Home = () => {
  return (
    <div className="homeContainer">
      <h1>welcome!</h1>
      <h2 className="mainTitle">Overview</h2>
      <div className="wigetsContainer">
        <div className="widgets">
          <div className="generalWidgets">
            <Widget type="sales" />
            <Widget type="expense" />
            <Widget type="earnings" />
          </div>
          <Metrics/>
          <Transactions />
        </div>
        <div className="sidebar">
          <Task tasks={tasks}/>
          <Progress/>
        </div>
      </div>

      {/* Sales
        Earning
        Inventory
        Website ananlytics
        marketing campaigns
        customer support
        social media metrics */}
    </div>
  );
};

export default Home;
