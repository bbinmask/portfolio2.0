import { Timeline } from "../components/Timeline";
import { journey } from "../constants";

const Journey = () => {
  return (
    <div className="w-full" id="journey">
      <Timeline data={journey} />
    </div>
  );
};

export default Journey;
