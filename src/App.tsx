import { BrowserRouter, Routes, Route } from "react-router-dom";
import { type FC } from "react";
import Login from "@/views/Login";
import Container from "@/layout";
import Foo from "@/views/Foo";
import Bar from "@/views/Bar";

const App: FC = () => {
  return (
    <BrowserRouter>
      <h1>测试功能4</h1>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
          <div>222</div>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <h1>无关紧要的问题</h1>
    </BrowserRouter>
  );
};

export default App;
