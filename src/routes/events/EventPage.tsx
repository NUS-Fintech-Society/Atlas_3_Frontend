import { EVENT_TAG_COLORS } from "@/components/constants";
import EventTag from "@/components/events/EventTag";

function EventPage() {
  return (
    <>
        <EventTag name={'Event Test 1 - Software Development'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.SD} />
        <EventTag name={'Event Test 2 - Machine Learning'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.ML} />
        <EventTag name={'Event Test 3 - Blockchain'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.BC} />
        <EventTag name={'Event Test 4 - Quant'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.Q} />
        <EventTag name={'Event Test 5 - Internal Affairs'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.IA} />
        <EventTag name={'Event Test 6 - External Relations'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.ER} />
        <EventTag name={'Event Test 7 - Presidential Cell'} datetime={new Date()} backgroundColor={EVENT_TAG_COLORS.PC} />
    </>
  )
}

export default EventPage