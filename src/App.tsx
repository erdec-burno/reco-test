import './App.css';
import { Layout } from 'antd';
import { AppInventory } from './modules/AppInventory/components/AppInventory.tsx';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  minWidth: '1200px',
  margin: '0 auto',
  marginTop: '14px',
};

function App() {
  return (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <AppInventory />
      </Content>
    </Layout>
  );
}

export default App;
