import Layout from "./Layout/Layout";
import RouterComponent from "./Routers/RouterComponent";
import { BurgerProvider } from "./context/ContextForBurger";

function App() {
  return (
    <>
      <BurgerProvider>
        <Layout>
          <RouterComponent />
        </Layout>
      </BurgerProvider>
    </>
  );
}

export default App;
