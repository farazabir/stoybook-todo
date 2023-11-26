import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet,Button } from
'react-native';
import MaterialCommunityIcons from
'react-native-vector-icons/MaterialCommunityIcons';

import AntDesign from
'react-native-vector-icons/AntDesign';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Math.random(), text: newTodo, expanded: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const expandTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, expanded: !todo.expanded };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderTodoItem = ({ item }) => {
    const text = item.expanded || item.text.length <= 10 ? item.text : item.text.substring(0, 10) + '...';

    return (
      <View style={styles.todoItem}>
        <TouchableOpacity
          style={styles.todoToggleButton}
          onPress={() => toggleTodo(item.id)}
        >
          <MaterialCommunityIcons
            name={item.completed ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={item.completed ? '#28a745' : '#ccc'}
          />
        </TouchableOpacity>

        <Text
          style={item.completed ? styles.completedTodo : styles.todoText}
          onPress={() => expandTodo(item.id)}
        >
          {text}
        </Text>

        <TouchableOpacity style={styles.todoRemoveButton} onPress={() => removeTodo(item.id)}>
          <AntDesign name="delete" size={24} color="#dc3545" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a new to-do item"
        onChangeText={(text) => setNewTodo(text)}
        value={newTodo}
      />
     <View style={{ marginBottom: 30 }}>
    <Button title="Add To-Do" onPress={addTodo} color={'black'} />
  </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  todoToggleButton: {
    marginRight: 10,
  },
  todoText: {
    fontSize: 18,
  },
  completedTodo: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  todoRemoveButton: {
    marginLeft: 10,
  },
});

export default App;