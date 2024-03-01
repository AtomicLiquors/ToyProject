import ProfileImg from "@/common/ProfileImg";
import LabeledInput from "@/common/gadgets/LabeledInput";
import Page from "@/common/layout/Page";
import PageBody from "@/common/layout/PageBody";
import PageHeader from "@/common/layout/PageHeader";
import { Flex } from "@/styles/container";
import { Palette } from "@/styles/palette";
//import styled from "styled-components";

const ProfileEdit = () => {
  return (
    <Page>
      <PageHeader />
      <PageBody>
        <Flex $column $center style={{ height: "100%", gap: "3rem" }}>
          <div>
            <ProfileImg size={6} />
            <div style={{ color: Palette.BLUE }}>
              <u>프로필 사진 변경</u>
            </div>
          </div>
          <Flex $column $center style={{ gap: "1.6rem" }}>
            <LabeledInput id="nickname" stretch label={"닉네임"} />
            <LabeledInput id="birthday" stretch label={"생년월일"} />
            <LabeledInput id="gender" stretch label={"성별"} />
          </Flex>
        </Flex>
      </PageBody>
    </Page>
  );
};

export default ProfileEdit;
