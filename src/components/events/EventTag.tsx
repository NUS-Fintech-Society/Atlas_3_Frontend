import styles from "../../assets/css/events/EventTag.module.css";

interface EventTagProps {
  name: string;
  datetime: Date;
  backgroundColor: string;
}

const EventTag: React.FC<EventTagProps> = ({
  name,
  backgroundColor,
}: EventTagProps) => {
  return (
    <div className={styles["event-tag-container"]} style={{ backgroundColor }}>
      <span
        className={
          backgroundColor == "#0C1747"
            ? styles["event-tag-font-white"]
            : styles["event-tag-font-black"]
        }
      >
        {name}
      </span>
    </div>
  );
};

export default EventTag;
