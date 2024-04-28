export default function Tabs({ children, ...props }) {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
}
