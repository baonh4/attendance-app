import React from "react";
import styles from "./styles.module.scss";

type PropsType = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  onClick?: (params: any) => any;
};

const InfoBox = (props: PropsType) => {
  const { children, title, description, onClick } = props;
  return (
    <div onClick={onClick} className={styles['info-box']}>
      {children}
      <h1 className={styles['title']}>{title}</h1>
      <p className={styles['description']}>{description}</p>
    </div>
  )
};

export default InfoBox;