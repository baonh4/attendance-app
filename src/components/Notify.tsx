import React from "react";
import styles from "./styles.module.scss";

type TopNotifyPropsType = {
  leftText: string;
  rightText?: string;
  backgroundColor?: string;
  textColor?: string;
};

export const TopNotify = (props: TopNotifyPropsType) => {
  const { leftText, rightText, backgroundColor = '#EFFBFB', textColor = '#42B3AD' } = props;
  return (
    <div style={{ backgroundColor, color: textColor }} className={styles['top-notify']}>
     {leftText && <h1>{leftText}</h1>}
     {rightText && <h1>{rightText}</h1>}
    </div>
  )
};