import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, deleteTodo, onOpen }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onDelete={deleteTodo} onOpen={onOpen} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
