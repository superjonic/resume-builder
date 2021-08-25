export default function FullName({ text, icon }) {
  const { list } = icon
  return (
    <header className="full-name">
      <p>Made with React {list[1].icon}</p>
      <h1>{text}</h1>
      <h3>FULL STACK WEB DEVELOPER</h3>
    </header>
  );
}
