import { BrowserRouter, Routes, Route } from "react-router-dom";
import { type FC } from "react";
import Login from "@/views/Login";
import Container from "@/layout";
import Foo from "@/views/Foo";
import Bar from "@/views/Bar";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
