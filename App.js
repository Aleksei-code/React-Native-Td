import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";
import { THEME } from "./src/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "To do homework" },
    { id: "2", title: "To make the right decision" },
  ]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "source-sans-regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
          "source-sans-bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const updTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const onOpen = (id) => {
    setTodoId(id);
  };

  const deleteTodo = (id) => {
    const todo = todos.find((el) => el.id === id);
    Alert.alert(
      "Delete element",
      `Are you sure, you want to delete ${todo.title}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      onOpen={setTodoId}
    ></MainScreen>
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        deleteItem={() => deleteTodo(todoId)}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updTodo}
      />
    );
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
