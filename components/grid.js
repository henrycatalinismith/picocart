export default ({ children, n, w, gap = 8 }) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: [...Array(n)].map(() => `${w}px`).join(" "),
    gridGap: `${gap}px`,
  }}>
    {children}
  </div>
)
