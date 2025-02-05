import { useState } from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import TextEditor from "../components/text-editor/TextEditor.tsx";
import { Counter } from "../components/counter/Counter.tsx";
import Form from "../components/form/Form.tsx";
import { Outlet } from "react-router-dom";
const components: Record<string, React.ComponentType> = {
  Counter,
  TextEditor,
  Form,
};

const Homepage = () => {
  const [component, setComponent] = useState<string | null>("Counter");

  const SelectedComponent =
    components[component as keyof typeof components] || null;

  return (
    <div>
      <Navbar setComponent={setComponent} />

      {SelectedComponent ? <SelectedComponent /> : <Outlet />}
    </div>
  );
};
export default Homepage;
