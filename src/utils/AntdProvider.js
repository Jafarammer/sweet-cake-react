import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#faad14",
          colorPrimaryHover: "#ffc53d",
          colorPrimaryActive: "#d48806",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
