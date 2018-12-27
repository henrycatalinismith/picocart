export default ({ children, bg }) => (
  <div style={{
    backgroundColor: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  }}>
    {children}
  </div>
)
