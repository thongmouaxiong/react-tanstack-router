import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar collapsed={collapsed} transitionDuration={1000}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem component={<Link to="/home" />}> Documentation</MenuItem>
          <MenuItem component={<Link to="/about" />}> Calendar</MenuItem>
          <MenuItem component={<Link to="/service" />}> E-commerce</MenuItem>
          <MenuItem component={<Link to="/map" />}> Map</MenuItem>
          <MenuItem component={<Link to="/excel" />}> Excel</MenuItem>
        </Menu>
        <main style={{ padding: 10 }}>
          <div>
            <button
              className="sb-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              Collapse
            </button>
          </div>
        </main>
      </Sidebar>
    </div>
  );
}
