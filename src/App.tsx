import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Content } from "./components/Content";
import { Employees } from "./components/Employees";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="header">
          <h1>ITERATE ITERATE ITERATE ITERATE ITERATE ITERATE ITERATE!!</h1>
        </header>
        <main className="main">
          <hr />
          <a
            href="#Employees"
            style={{
              backgroundColor: "pink",
              maxWidth: "100px",
              padding: "20px",
            }}
          >
            Ansatte
          </a>
          <Content />
          <hr />
          <Employees />
        </main>
        <footer className="footer">
          <p>Made with ❤️ by KRABBELAGET</p>
          <a
            className="link"
            href="https://webflow2.iterate.no/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about Iterate here
          </a>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
