import { useSettingsStore, NameModes } from "../stores/SettingsStore";

export default function NameModeSelect() {
  const settings = useSettingsStore();
  return (
    <select
      value={settings.nameMode}
      style={{marginLeft: "8px", marginRight: "8px"}}
      onChange={(e) => {
        const nameMode = e.target.value as NameModes;
        settings.updateNameMode(nameMode);
      }}
    >
      <option value={"origin"}>原名</option>
      <option value={"shortName"}>缩写</option>
      <option value={"chinese"}>中文</option>
    </select>
  );
}