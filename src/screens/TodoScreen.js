import React, { useState, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = () => {
  const { todos, updTodo, deleteTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos.find((t) => t.id === todoId);
  const saveHandler = (title) => {
    updTodo(todo.id, title);
    setModal(false);
  };

  // deleteItem={() => deleteTodo(todoId)}
  // goBack={() => changeScreen(null)}
  // todo={selectedTodo}
  // onSave={updTodo}
  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}> {todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={21} />
        </AppButton>
      </AppCard>
      <View style={styles.buttonsGroup}>
        <View style={styles.button}>
          <AppButton
            color={THEME.GREY_COLOR}
            onPress={() => changeScreen(null)}
          >
            <AntDesign name="back" size={21} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => deleteTodo(todo.id)}
          >
            <AntDesign name="delete" size={21} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 2, width: Dimensions.get("window").width / 3 },
  title: { fontSize: 20 },
  card: { marginBottom: 20, padding: 15 },
});
