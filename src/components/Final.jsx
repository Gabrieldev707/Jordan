export default function Final({ copy }) {
  return (
    <section className="final">
      <div className="tag">{copy.tag}</div>
      <h2 className="reveal">
        {copy.line1}<br />
        {copy.line2} <em>{copy.line2Emphasis}</em>.<br />
        {copy.line3} <em>{copy.line3Emphasis}</em>.
      </h2>
    </section>);
}
