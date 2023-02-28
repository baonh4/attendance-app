import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss";

const CustomInput = forwardRef((props: any, ref: any) => {
  const { onClick } = props;
  return (
    <div className={styles['hidden-date-picker']} onClick={onClick} ref={ref}/>
  );
});

export const HiddenDatePicker = (props: any) => {
  return (
    <DatePicker customInput={<CustomInput/>} withPortal className={styles['hidden-date-picker']} {...props} />
  )
};