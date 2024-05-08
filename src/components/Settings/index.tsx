import { useState } from "react";
import { useAtom } from "jotai";
import { 
  patternAtom,
  regexAtom,
  showChineseNameAtom,
  showCompanyColorAtom,
  showOriginChartAtom,
} from "@/stores";

import "./index.scss";

const Settings = () => {
  const [pattern, setPattern] = useAtom(patternAtom);
  const [, setRegex] = useAtom(regexAtom);
  const [compileError, setCompileError] = useState(false);

  const [showOriginChart, setShowOriginChart] = useAtom(showOriginChartAtom);
  const [showCompanyColor, setShowCompanyColor] = useAtom(showCompanyColorAtom);
  const [showChineseName, setShowChineseName] = useAtom(showChineseNameAtom);

  function compile(input: string) {
    setPattern(input);
    try {
      const regex = new RegExp(input);
      console.info("正则表达式编译成功：", regex);
      setRegex(regex);
      setCompileError(false);
    } catch (ex) {
      setCompileError(true);
      console.warn("正则表达式编译错误", ex);
    }
  }

  function updateShowOriginChart(checked: boolean) {
    setShowOriginChart(checked);
  }

  function updateShowCompanyColor(checked: boolean) {
    setShowCompanyColor(checked);
  }

  function updateShowChineseName(checked: boolean) {
    setShowChineseName(checked);
  }

  return (
    <div className="settings">
      <div className="setting-item pattern">
        <input 
          type="text" 
          placeholder="请输入正则表达式"
          value={pattern}
          onChange={e => {
            const value = e.currentTarget.value;
            compile(value);
          }}
          style={{
            width: "100%",
            backgroundColor: compileError ? "pink" : undefined,
          }}
          disabled={showOriginChart}
        />
      </div>

      <label className="setting-item">
        <input
          name="show-origin-chart"
          type="checkbox"
          checked={showOriginChart}
          onChange={e => {
            const checked = e.currentTarget.checked;
            updateShowOriginChart(checked);
          }}
        />
        <span className="checkbox-label">原版图表</span>
      </label>

      <label className="setting-item">
        <input
          name="show-company-color"
          type="checkbox"
          disabled={showOriginChart}
          checked={showCompanyColor}
          onChange={e => {
            const checked = e.currentTarget.checked;
            updateShowCompanyColor(checked);
          }}
        />
        <span className="checkbox-label">公司颜色</span>
      </label>

      <label className="setting-item">
        <input
          name="show-chinese-name"
          type="checkbox"
          disabled={showOriginChart}
          checked={showChineseName}
          onChange={e => {
            const checked = e.currentTarget.checked;
            updateShowChineseName(checked);
          }}
        />
        <span className="checkbox-label">中文名称</span>
      </label>

      <label className="setting-item" hidden>
        <input
          name="show-short-name"
          type="checkbox"
          disabled={showOriginChart}
        />
        <span className="checkbox-label">缩短名称</span>
      </label>

      <div className="setting-item" hidden>
        <button
          disabled={showOriginChart}
          onClick={() => {
            console.info("点击导出按钮");
          }}
        >
          导出
        </button>
      </div>
    </div>
  );
};

export default Settings;
