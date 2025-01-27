import styles from "./App.module.css";
import Header from "./Header";
import Footer from "./components/Footer";
import ListContainer from "./ListContainer";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
    </>
  );
}

export default App;
