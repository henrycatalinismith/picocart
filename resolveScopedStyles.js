// Big WTF here by styled-jsx
// https://github.com/zeit/styled-jsx/issues/273#issuecomment-351085468
export default function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: () => scope.props.children,
    wrapClassNames: (...classNames) => [scope.props.className, ...classNames].filter(Boolean).join(' '),
  };
}
