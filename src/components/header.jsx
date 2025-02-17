import "./header.css";

export const Header = (props) => (
  <>
    <nav className="head">
      <div className="logo">
        <img className="logoTyp" src="/JR-sign.svg" alt="" />
        <h1>Jeremi Rękoś</h1>
      </div>
      <ul>
        <li>
          <a href="#About">About Me</a>
        </li>
        <li>
          <a href="#MyWork">MyWork</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </>
);
