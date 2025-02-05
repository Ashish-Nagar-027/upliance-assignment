import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TextEditor from "../components/text-editor/TextEditor";
import { Counter } from "../components/counter/Counter";
import Form from "../components/Form/Form";
import { Outlet } from "react-router-dom";
const components: Record<string, React.ComponentType> = {
  Counter,
  TextEditor,
  Form,
};

const Homepage = () => {
  const [component, setComponent] = useState<string | null>("Counter");

  const SelectedComponent = components[component] || null;

  return (
    <div>
      <Navbar setComponent={setComponent} />

      {SelectedComponent ? <SelectedComponent /> : <Outlet />}
    </div>
  );
};
export default Homepage;
