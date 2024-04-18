import { useState, useEffect } from 'react';
import { TextInput, Button, Text, Flex, Divider, Textarea } from '@mantine/core';

const TodoApp = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

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
                    <Button variant="outline" onClick={() => handleDeleteTodo(index)}>
                        Delete
                    </Button>
                </Flex>
            ))}
        </Flex>
    );
};

export { TodoApp };
