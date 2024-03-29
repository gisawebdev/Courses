import {TodoAdd} from '../components/TodoAdd';
import {TodoList} from '../components/Todolist';
import {useTodo} from '../hooks/useTodo';

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodoCount,
		handleDeleteTodo,
		handleNewTodo,
		handleToggleTodo,
	} = useTodo();

	return (
		<>
			<h1>
				TodoApp: {todosCount}, Pendientes: {pendingTodoCount}
			</h1>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
