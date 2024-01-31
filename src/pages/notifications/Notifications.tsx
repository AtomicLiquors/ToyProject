import Page from "@/common/layout/Page";
import NotificationTab, { TabType } from "@/pages/notifications/component/NotificationTab";
import { Flex } from "@/styles/container";
import styled from "styled-components";

const Notifications = () => {
  return (
    <Page>
      <Flex $column style={{gap: '1rem', overflow: 'scroll', margin: '1rem'}}>
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
      </Flex>
    </Page>
  );
};

const S = {

  Group: styled(Flex)`
    width: 100%;
    flex-direction: column;
    align-items: center;
    
    box-sizing: border-box;
    gap: 0.4rem;
  `,

  GroupTitle: styled.div`
    margin-top: 1rem;
  `,
};
export default Notifications;
