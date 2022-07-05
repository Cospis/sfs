const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          {" "}
          <a href="/abt">About Us</a>
        </li>
        <li>
          {" "}
          <a href="/ppty">Properties</a>
        </li>
        <li>
          {" "}
          <a href="/pptyl">Properties Listing</a>
        </li>
        <li>
          <a href="/faq">FAQs</a>
        </li>
        <li>
          <a href="/cnct">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
