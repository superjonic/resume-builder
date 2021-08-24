export default function Summary({ data }) {
  const { title, text, strong } = data;

  return (
    <section className="summary">
      <h2>{title}</h2>
      <p>{text}<strong>{strong}</strong></p>
    </section>
  );
}
