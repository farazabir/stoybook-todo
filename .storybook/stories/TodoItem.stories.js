import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TodoItem from './TodoItem';

// Mock styles and props
const mockStyles = {
  todoItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  todoToggleButton: { marginRight: 10 },
  todoText: { fontSize: 18 },
  completedTodo: { fontSize: 18, textDecorationLine: 'line-through' },
  todoRemoveButton: { marginLeft: 10 },
};

const mockItem = { id: 1, text: 'Sample Todo', completed: false, expanded: false };

storiesOf('TodoItem', module)
  .add('default', () => (
    <TodoItem 
      item={mockItem} 
      toggleTodo={() => {}} 
      expandTodo={() => {}} 
      removeTodo={() => {}} 
      styles={mockStyles} 
    />)
  )
  .add('completed', () => (
    <TodoItem 
      item={{ ...mockItem, completed: true }} 
      toggleTodo={() => {}} 
      expandTodo={() => {}} 
      removeTodo={() => {}} 
      styles={mockStyles} 
    />))
