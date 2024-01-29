import NotificationTab, { TabType } from "@/common/NotificationTab";
import { Flex } from "@/styles/container";
import styled from "styled-components";

const Notifications = () => {
  return (
    <S.Container>
      <S.GroupTitle>
        <b>새 알림</b>
      </S.GroupTitle>
      <S.Group>
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
      </S.Group>

      <S.GroupTitle>
        <b>오늘</b>
      </S.GroupTitle>
      <S.Group>
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
      </S.Group>

      <S.GroupTitle>
        <b>이번 주</b>
      </S.GroupTitle>
      <S.Group>
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
        <NotificationTab
          userImg=""
          username={"karennne"}
          type={TabType.FOLLOW}
          timestamp={"2024-01-26"}
        />
      </S.Group>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    padding: 2rem;

    box-sizing: border-box;
    padding: 10px;
  `,

  Group: styled(Flex)`
    width: 100%;
    flex-direction: column;
    align-items: center;

    
    box-sizing: border-box;
    padding: 10px;
  `,

  GroupTitle: styled.div``,
};
export default Notifications;
