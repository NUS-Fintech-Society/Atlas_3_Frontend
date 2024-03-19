import styles from "css/events/EventTag.module.css";
import { EVENT_TAG_COLORS } from "../constants";

interface EventTagProps {
  name: string;
  datetime: Date;
  backgroundColor: string;
}

const EventTag = ({
  name,
  backgroundColor,
}: EventTagProps) => {
  return (
    <div className={`${styles.container} ${styles.font}`} style={{ backgroundColor }}>
      <span
        className={
          backgroundColor == EVENT_TAG_COLORS.PC
            ? styles.fontWhite
            : styles.fontBlack
        }
      >
        {name}
      </span>
    </div>
  );
};

export default EventTag;
