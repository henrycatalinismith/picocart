export default ({
  children,
  scale = 1.2,
  duration = 1000,
}) => (
  <div className="pulse">
    {children}
    <style jsx>{`
      @keyframes pulse {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(${scale});
        }
      }

      .pulse {
        animation-name: pulse;
        animation-duration: ${duration}ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
      }
    `}</style>
  </div>
)

