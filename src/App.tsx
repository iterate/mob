import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Content } from "./components/Content";
import { Employees } from "./components/Employees";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="header">
        <h1>ITERATE ITERATE ITERATE</h1>
        <hr />
        <Content />
        <hr />
        <Employees />
      </header>
    </QueryClientProvider>
  );
}

export default App;
