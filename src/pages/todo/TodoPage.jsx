import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import DragIndicator from "@mui/icons-material/DragIndicator";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todos";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [loaded, setLoaded] = useState(false); // ✅ new state

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setTodos(parsed);
      } catch (err) {
        console.error("Error parsing todos from localStorage", err);
      }
    } else {
      console.log(
        "No todos found in localStorage, starting with an empty list."
      );
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loaded]); // ✅ only save after loaded

  const handleAddTodo = () => {
    if (!newTodo.trim()) {
      alert("Cannot add empty todo!");
      return;
    }
    setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const handleToggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleEditOnClick = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleSaveEdit = () => {
    const updated = [...todos];
    updated[editIndex].text = editValue;
    setTodos(updated);
    setEditIndex(null);
    setEditValue("");
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(todos);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTodos(reordered);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="New Todo"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
      </Box>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <List
              ref={provided.innerRef}
              {...provided.droppableProps}
              sx={{ bgcolor: "background.paper" }}
            >
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      divider
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Box
                        {...provided.dragHandleProps}
                        sx={{ cursor: "grab", pr: 1 }}
                      >
                        <DragIndicator />
                      </Box>

                      <Checkbox
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(index)}
                      />

                      {editIndex === index ? (
                        <TextField
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          fullWidth
                          autoFocus
                          onBlur={handleSaveEdit}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSaveEdit();
                          }}
                        />
                      ) : (
                        <ListItemText
                          primary={
                            <div
                              onClick={() => handleEditOnClick(index)}
                              style={{
                                cursor: "pointer",
                                textDecoration: todo.completed
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {todo.text}
                            </div>
                          }
                        />
                      )}

                      <ListItemSecondaryAction>
                        <IconButton onClick={() => handleDelete(index)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default TodoPage;
