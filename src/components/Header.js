import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <h1>Book App</h1>
      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp">Books</a>
        </li>
        <li>
          <a href="contact.asp">About</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
