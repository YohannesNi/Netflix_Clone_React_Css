import React from "react";
import "./Nav.css";

function Nav() {
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  // }, []

  // );

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      <div>
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Films</li>
          <li>New&Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="Search">
        <img
          className=""
          src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-search-icon-png-image_4699282.jpg"
          alt=""
        />
        <img
          className="bell"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqV3GyHuP3xNKepwjkT53iME3zUodXXLK4j8XIJUgeidjR1ksHAWuqvXAXbMuBYG1UBKg&usqp=CAU"
          alt=""
        />
      
      <img
        className=""
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
      />
      </div>
    </div>
  );
}

export default Nav;
