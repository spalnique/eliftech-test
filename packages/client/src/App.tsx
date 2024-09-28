import { ContextProvider } from './components/Context/ContextProvider.tsx';
import Router from './router/Router.tsx';
import Layout from './components/Layout/Layout.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position='top-center' />
      <ContextProvider>
        <Layout>
          <Router />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default App;
