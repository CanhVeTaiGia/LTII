import "./header.scss";
export default function Header() {
  /*
    Quy tắc đặt tên className cho scss BEM (block-element-modifier)
  */
  return (
    <div className="header">
      Header
      <div className="logo">logo</div>
      <div className="navbar">
        <ul className="nav-list">
          <li className="home">home</li>
          <li className="about">about</li>
          <li className="contact">contact</li>
        </ul>
      </div>
    </div>
  );
}
