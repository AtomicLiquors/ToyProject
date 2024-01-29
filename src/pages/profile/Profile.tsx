import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import ProfileImg from "@/common/ProfileImg";
import modalManager from "@/manager/ModalManager.ts";
import Button, { ButtonThemeOption } from "@/common/gadgets/Button";
import Gallery from "@/common/Gallery";
import { Link } from "react-router-dom";
import Paths from "@/util/consts/paths";

const Profile: React.FC = () => {
  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
      <Modal isOpen={isOpen} close={close} />
      <Flex $center>jacob West</Flex>
      <S.ProfileContianer $column>
        <S.ProfileImgAndNumerics $spaceAround>
          <ProfileImg width={32}/>
          <div>
            <div>54</div>
            <div>게시글</div>
          </div>
          <div>
            <div>844</div>
            <div>팔로워</div>
          </div>
          <div>
            <div>162</div>
            <div>팔로잉</div>
          </div>
        </S.ProfileImgAndNumerics>
        <S.ProfileMessages $column $alignStart>
          <b>Jacob West</b><br/>
          다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파. 다람쥐 헌 쳇바퀴에 타고파.
          <Link to={Paths.PROFILEEDIT}>
            <Button text={'프로필 편집'} theme={ButtonThemeOption.WHITE} stretch/>
          </Link>
        </S.ProfileMessages>
      </S.ProfileContianer>
      <div style={{overflow: 'scroll'}}>
        <Gallery/>
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex)`
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
  `,

  ProfileContianer: styled(Flex)`
    box-sizing: border-box; 
    padding: 1em;
    width: 100%;
  `,

  ProfileImgAndNumerics: styled(Flex)`
    box-sizing: border-box; 
    padding: 1em;
    width: 100%;
  `,

  ProfileMessages: styled(Flex)`
    padding: 1em;
  `
};

export default Profile;
