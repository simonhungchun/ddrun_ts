import { adminAgent } from "@/service/api";

const Foo = () => {
  const handleAgentList = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    adminAgent({ current: 1, pageSize: 20 });
  };
  return (
    <div>
      <h1>Foo</h1>
      <button type="button" onClick={handleAgentList}>
        获取代理列表
      </button>
    </div>
  );
};
export default Foo;
