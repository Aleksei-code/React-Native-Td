import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, deleteItem, todo, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}> {todo.title}</Text>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>
      <View style={styles.buttonsGroup}>
        <View style={styles.button}>
          <Button color={THEME.GREY_COLOR} title="Back" onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            color={THEME.DANGER_COLOR}
            title="Delete"
            onPress={deleteItem}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 2, width: "45%" },
  title: { fontSize: 20 },
  card: { marginBottom: 20, padding: 15 },
});
