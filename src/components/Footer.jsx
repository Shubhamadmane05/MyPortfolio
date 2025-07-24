const Footer = () => {
  return (
    <footer
      className="bg-dark text-white text-center py-3"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
      }}
    >
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Shubham. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
