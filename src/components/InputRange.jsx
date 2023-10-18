export default function InputRange({ settings, state }) {
  const { label, maximum, minimun } = settings;
  const [value, setValue] = state;

  return (
    <label className="input range">
      {label} {value}/{maximum}
      <br />
      <input
        type="range"
        max={maximum}
        min={minimun}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
}
