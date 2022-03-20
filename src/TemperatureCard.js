export default function TemperatureCard({ ...props }) {
  return (
    <div className="bg-slate-500 rounded p-4 m-2">
      <div>{props.date}</div>
      <div>{props.summary}</div>
      <div>{props.temperatureC}</div>
      <div>{props.temperatureF}</div>
    </div>
  );
}
