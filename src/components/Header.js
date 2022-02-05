function Header({ data }) {
  return (
    <>
      <h1>This is just a header file of {data}</h1>
    </>
  );
}

Header.defaultProps = {
  data: "No data received",
};

export default Header;
