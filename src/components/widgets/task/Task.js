import "./task.scss";

const Task = ({ tasks }) => {
  return (
    <div className="taskContainer">
      <h3 className="subTitle">Tasks</h3>
      {tasks.map((task) => (
        <div className="tasks">
          <div className="top">
            <p className={`status ${task.status}`}>{task.status}</p>
            <p>{task.date}</p>
          </div>
          <h4 className="subTitle">{task.title}</h4>
          <p className="addedBy">{task.addedBy}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Task;
