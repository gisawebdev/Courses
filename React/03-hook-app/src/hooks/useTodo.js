import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	const todosCount = todos.length;
	const pendingTodoCount = todos.filter((todo) => !todo.done).length;

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};

		dispatch(action);
	};
	const handleDeleteTodo = (id) => {
		dispatch({
			type: 'Remove Todo',
			payload: id,
		});
	};
	const handleToggleTodo = (id) => {
		dispatch({
			type: 'Toggle Todo',
			payload: id,
		});
	};

	return {
		todos,
		todosCount,
		pendingTodoCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
