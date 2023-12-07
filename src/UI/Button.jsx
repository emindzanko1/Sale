export default function Button({children, className}) {
  let cssClasses = 'button';
  return <button className={cssClasses}>{children}</button>;
}
