import React, { useState, ChangeEvent } from "react";
import { useProductStore } from "../stores/ProductStore";

export default function Filter() {
  const [pattern, setPattern] = useState("");

  const store = useProductStore();

  // store.updateRegex();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let pattern = e.target.value;
    setPattern(pattern);
    try {
      const regex = new RegExp(pattern);
      console.info("正则表达式编译成功：", regex);
      store.updateRegex(regex);
    } catch (ex) {
      console.warn("正则表达式编译失败：", pattern);
    }
  };

  return (
    <input
      value={pattern}
      onChange={onChange}
      placeholder="请输入正则表达式"
      style={{
        width: "500px",
      }}
    />
  );
}
