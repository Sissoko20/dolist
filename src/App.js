import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoForms from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

import { Layout, Row, Col } from "antd";
import "antd/dist/reset.css";
import IntroText from "./Components/IntroText";

const { Header, Content } = Layout;
function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo([...todos, todo]);
  }; //fonction permettant d'ajouter la valeur du tableau dans un autre tableau
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const updateTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index].text = newValue;
    setTodo(newTodos);
  };

  return (
    <Row justify="center" style={{ padding: "20px" }} className="containerTodo">
      <Col
        xs={24}
        sm={20}
        md={16}
        lg={12}
        xl={8}
        style={{
          maxWidth: "100%",
        }}
      >
        <IntroText />
        <TodoForms addTodo={addTodo} />

        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </Col>
    </Row>
  );
}

export default App;
