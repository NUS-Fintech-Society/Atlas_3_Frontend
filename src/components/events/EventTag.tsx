
import '../../assets/css/events/EventTag.css';

interface EventTagProps {
    name: string;
    datetime: Date;
    backgroundColor: string;
}

const EventTag: React.FC<EventTagProps> = ({ name, backgroundColor }: EventTagProps) => {
    return (
        <div className="event-tag-container" style={{ backgroundColor }}>
        <span className={backgroundColor == "#0C1747" ? "event-tag-font-white" : "event-tag-font-black"}>{name}</span>
        </div>
    );
}

export default EventTag;