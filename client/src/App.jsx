import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Todolist from "./pages/Todolist"
import NewTodoRow from "./pages/NewTodoRow"
import EditTodoRow from "./pages/EditTodoRow"
import Header from "./tools/Header"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const onSearch = (value) => {
    setSearchTerm(value)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header isHomeLocation onSearch={onSearch} />
        </Route>
        <Route path="/todo/">
          <Header isHomeLocation={false} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Todolist searchTerm={searchTerm} />
        </Route>
        <Route exact path="/todo/new" component={NewTodoRow} />
        <Route path="/todo/update/:id" component={EditTodoRow} />
      </Switch>
    </Router>
  )
}

export default App
