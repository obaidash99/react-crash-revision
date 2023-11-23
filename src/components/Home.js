import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const Home = ({ showAddTask, addTask, tasks, deleteTask, toggleReminder }) => {
	return (
		<>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No Tasks!'
			)}
		</>
	);
};

export default Home;
