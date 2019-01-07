export default ({ children, angle }) => (
  <div className="rotate">
    {children}
    <style jsx>{`
      .rotate {
        transform: rotate(${angle}deg);
      }
    `}</style>
  </div>
)

