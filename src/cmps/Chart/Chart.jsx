
import { Sparklines,SparklinesLine,SparklinesBars } from 'react-sparklines';
import './Chart.scss'

export default function Chart({data}) {
    console.log(data);
    return (
        <section className="chart">
        <Sparklines data={data}>
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>
    </section>
    )
}
