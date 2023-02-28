import React from "react";
import { Button, Avatar } from "zmp-ui";
import styles from "./styles.module.scss";
import { formatDate } from "utils/helpers";

type CheckInBoxPropsType = {
  time?: number;
  status?: number;
};

export const CheckInBox = (props: CheckInBoxPropsType) => {
  const { time = new Date().getTime(), status } = props;
  return (
    <div className={styles['checkin-wrapper']}>
      <p>Thời gian bắt đầu sự kiện</p>
      <h1 className={styles['checkin-time']}>
        {time && formatDate(new Date(time), 'HH:mm')}
      </h1>
      <Button className="checkin-btn" fullWidth>
        Checkin Now
      </Button>
    </div>
  )
};

type InformationPropsType = {
  eventTitle?: string;
  userName?: string;
  userAvatar?: string;
  description?: string;
};

export const Information = (props: InformationPropsType) => {
  const { eventTitle, description, userName, userAvatar } = props;
  console.log(userAvatar);
  return (
    <div className={styles['info-wrapper']}>
      <div className={styles['left-info']}>
        <p className={styles['class-title']}>{eventTitle}</p>
        <h1 className={styles['user-name']}>{userName}</h1>
        <p className={styles['description']}>{description}</p>
      </div>
      <div className={styles['right-info']}>
        <Avatar src={userAvatar}/>
      </div>
    </div>
  )
};

export default Information;


type EventsWrapperPropsType = {
  children: React.ReactNode;
};

export const EventsWrapper = (props: EventsWrapperPropsType) => {
  const { children } = props;
  return (
    <div className={styles['events-wrapper']}>
      {children}
    </div>
  )
};