import styles from "./App.module.css";
import Header from "./Header";
import Footer from "./components/Footer";
import ListContainer from "./ListContainer";

function App() {
  // jsx 는 <> <div> 빈 태그를 갖고 있어야 한다.
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;
