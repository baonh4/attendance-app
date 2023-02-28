import React, { useState, useEffect, useMemo } from "react";
import { Page, useNavigate, DatePicker } from "zmp-ui";
import { Information, CheckInBox, EventsWrapper } from "components/HomePage";
import { TopNotify } from "components/Notify";
import { HiddenDatePicker } from "components/Input";
import { EventsImgComponent, InfoImgComponent } from "components/Images";
import InfoBox from "components/InfoBox";
import { useRecoilValue } from "recoil";
import { userInfo } from "zmp-sdk";
import { userState } from "../state";
// import getLocation from 'services/ZMP/getLocation';
// import getAccessToken from 'services/ZMP/getAccessToken';
import getUserInfo from 'services/ZMP/getUserInfo';
import getEventInfo from "services/getEventInfo";
import { formatDate } from "utils/helpers";

const HomePage: React.FunctionComponent = () => {
  const [zaloInfo, setZaloInfo] = useState<any>({});
  const { avatar: zaloAvatar, name: zaloName } = zaloInfo;
  const [eventInfo, setEventInfo] = useState<any>({});
  const { eventTitle, description } = eventInfo;
  useEffect(() => {
    const fetchData = async() => {
      const [zaloInfoRes, eventInfoRes] = await Promise.allSettled([getUserInfo(), getEventInfo()]);
      console.log(zaloInfoRes);
      zaloInfoRes.status === 'fulfilled' && setZaloInfo(zaloInfoRes.value);
      eventInfoRes.status === 'fulfilled' && setEventInfo(eventInfoRes.value);
    }
    fetchData();
  }, []);
  return (
    <Page className="page">
      <TopNotify leftText="Heineken Refresh your music" rightText="17/10"/>
      <Information userAvatar={zaloAvatar} eventTitle={eventTitle} userName={zaloName} description={description}/>
      <CheckInBox/>
      <EventsWrapper>
        <InfoBox onClick={() => {}} title="Sự kiện" description="Lịch trình sự kiện diễn ra">
          <EventsImgComponent/>
        </InfoBox>
        <InfoBox title="Xin nghỉ" description="Đăng ký ngày nghỉ của bạn">
          <InfoImgComponent />
          <HiddenDatePicker onChange={(e) => console.log(e?.target?.value)} minDate={new Date()}/>
        </InfoBox>
      </EventsWrapper>
    </Page>
  );
};

export default HomePage;
