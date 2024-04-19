import { Button, Divider, Flex, Text, Textarea } from '@mantine/core';
import { useState } from 'react';
import * as Icons from 'react-icons/ri';

const getTodosFromLocalStorage = () => {
    try {
        const todos = localStorage.getItem('todos');
        if (todos) return JSON.parse(todos);
        return [];
    } catch (error) {
        return [];
    }
};

const TodoApp = () => {
    const TODOS = getTodosFromLocalStorage();
    const [todos, setTodos] = useState<string[]>(TODOS);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const currentTodos = [...todos, newTodo];
            setTodos(currentTodos);
            localStorage.setItem('todos', JSON.stringify(currentTodos));
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleCopy = (val: string) => {
        navigator.clipboard.writeText(val);
    };

    return (
        <Flex gap="sm" direction="column">
            <Textarea
                value={newTodo}
                onChange={event => setNewTodo(event.currentTarget.value)}
                placeholder="Enter a new todo"
            />
            <Button onClick={handleAddTodo}>Add Todo</Button>
            <Divider />
            {todos.map((todo, index) => (
                <Flex key={index} direction="row" align="center" gap="sm" justify="space-between">
                    <Text m={2}>{todo}</Text>
                    <Flex direction="row" gap="sm">
                        <Button variant="outline" onClick={() => handleCopy(todo)}>
                            <Icons.RiFileCopy2Fill />
                        </Button>
                        <Button variant="outline" onClick={() => handleDeleteTodo(index)}>
                            <Icons.RiDeleteBin2Fill />
                        </Button>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export { TodoApp };
