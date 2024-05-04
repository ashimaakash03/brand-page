const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="src/assets/logo.PNG"
            alt="logo"
            height="50px"
            width="100px"
          />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
