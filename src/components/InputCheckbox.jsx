export default function InputCheckbox({ settings, state }) {
  const { label } = settings;
  const [value, setValue] = state;

  return (
    <label className="input checkbox">
      <input type="checkbox" value={value} onChange={() => setValue(!value)} />
      {label}
    </label>
  );
}
