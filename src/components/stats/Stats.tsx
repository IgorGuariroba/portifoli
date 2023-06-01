import {stats} from "../../Data.tsx";
import {StatsBox, StatsNo, StatsTitle} from "./Stats.styles.ts";
import parse from "html-react-parser";

export function Stats() {
    return (<>
        {stats.map(({id, no, title}) => (
            <StatsBox key={id}>
                <StatsNo>{no}</StatsNo>
                <StatsTitle>{parse(title)}</StatsTitle>
            </StatsBox>
        ))}
    </>);
}