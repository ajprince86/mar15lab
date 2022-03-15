import "./App.css";
import Book from "./components/Book";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="The Power of Now"
        description="Lorem ipsum dolor sit amet, agam cibo veri in vel. An vis quem nemore, nec dicunt albucius perfecto ne. Erroribus assueverit ad pro, qui ne enim commodo, an nec commune vivendum. Utamur blandit salutatus ut sit, menandri accusata necessitatibus eu ius. Graeci volumus mei ex, cu pri maiorum patrioque, ad nec dico suscipit."
        img="https://images.squarespace-cdn.com/content/v1/602efe1b17a884038d4f516e/1613700184987-PNZTRBREZ8HY3O7CFU1K/The_Power_of_Now_Paper.png"
        alt="the power of now"
      />
      <Book
        title="The Alchemist"
        description="Lorem ipsum dolor sit amet, agam cibo veri in vel. An vis quem nemore, nec dicunt albucius perfecto ne. Erroribus assueverit ad pro, qui ne enim commodo, an nec commune vivendum. Utamur blandit salutatus ut sit, menandri accusata necessitatibus eu ius. Graeci volumus mei ex, cu pri maiorum patrioque, ad nec dico suscipit."
        img="https://kbimages1-a.akamaihd.net/6ab9b1f1-2d77-4cfa-992a-d95188c75985/1200/1200/False/a-teacher-s-guide-to-the-alchemist.jpg"
        alt="the alchemist"
      />
      <Footer />
    </div>
  );
}

export default App;
