import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Todolist from "./pages/Todolist"
import NewTodoRow from "./pages/NewTodoRow"
import EditTodoRow from "./pages/EditTodoRow"
import Header from "./tools/Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Todolist} />
        <Route exact path="/newTodoRow" component={NewTodoRow} />
        <Route exact path="/editTodoRow" component={EditTodoRow} />
      </Switch>
    </Router>
  )
}

export default App
