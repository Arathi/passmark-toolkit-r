import { IProduct, Product } from "../stores/ProductStore";
import RankList from "./RankList";
import NameModeSelect from './NameModeSelect';
import Filter from "./Filter";
import { useSettingsStore } from "../stores/SettingsStore";

type ProductLevel = "high_end" | "mid_range" | "midlow_range" | "low_end";

interface ChartProps {
  type: string;
  level: ProductLevel;
  updateTime: string;
  data: IProduct[];
}

const chartSubtitles = new Map<ProductLevel, string>([
  ["high_end", "High End"],
  ["mid_range", "High Mid Range"],
  ["midlow_range", "Low Mid Range"],
  ["low_end", "Low End"],
]);

export default function Chart(props: ChartProps) {
  const settings = useSettingsStore();
  const { type, level, updateTime, data } = props;

  return (
    <div className="chart">
      <div className="chart_header">
        <div className="chart_title">PassMark - {type} Mark</div>
        <div className="chart_subtitle">
          {chartSubtitles.get(level)} {type}s
        </div>
        <div className="chart_subtitle" style={{ fontSize: "small" }}>
          Updated {updateTime}
        </div>
      </div>
      <div style={{marginBottom: "8px"}}>
        <Filter />
        <NameModeSelect />
      </div>
      <div className="chart_subheader">
        <div className="chart_tabletitle1">{type}</div>
        <div className="chart_tabletitle2">{type} Mark</div>
        <div className="chart_tabletitle3">Price (USD)</div>
      </div>
      <RankList data={data} nameMode={settings.nameMode} />
    </div>
  );
}
