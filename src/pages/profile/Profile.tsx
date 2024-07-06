import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import ProfileImg from "@/common/ProfileImg";
import modalManager from "@/manager/ModalManager.ts";
import Button, { ButtonThemeOption } from "@/common/gadgets/Button";
import Gallery from "@/common/Gallery";
import { Link, useLocation } from "react-router-dom";
import Paths from "@/util/consts/Paths";
import Page from "@/common/layout/Page";
import { useEffect, useState } from "react";
import { getMyPosts, getPostsById } from "@/api/post";

const Profile: React.FC = () => {
  const emptyMsg = "등록된 게시글이 없습니다.";
  const { isOpen, close } = modalManager();
  // const [postData, setPostData] = useState<Array<PostType>>([]);
  const [isFetching, setIsFetching] = useState(false);
  
  const location = useLocation();

  //const io = new IntersectionObserver(()=>{}, {threshold: 0.7});
 // io.observe();

  useEffect(() => {
    const sw = navigator.serviceWorker;

    if (sw) {
      sw.addEventListener("message", (event) => {
        if (event.source && event.data) {
          setIsFetching(false);
          console.log(event.data);
        }
      });
    }

    const navState: ProfileNavigateType = location.state;
    const mine = navState.mine;
    if(mine){
      ( async () => {
        const { data } = await getMyPosts();
        console.log(data);
      })();
    }else{
      ( async () => {
        const { data } = await getPostsById(navState.id);
        console.log(data);
      })();
    }
  }, []);

  return (
    <Page $center>
      <Modal isOpen={isOpen} close={close} />
      <Flex $center style={{height: '3rem'}}><b>jacob West</b></Flex>
      <S.ProfileContianer $column>
        <S.ProfileImgAndNumerics $spaceAround>
          <ProfileImg size={3}/>
          <div>
            <div><b>54</b></div>
            <div>게시글</div>
          </div>
          <div>
            <div><b>844</b></div>
            <div>팔로워</div>
          </div>
          <div>
            <div><b>162</b></div>
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
      { isFetching ? <div>{isFetching}</div> : <></>}
        <Gallery posts={[]} emptyMsg={emptyMsg}/>
    </Page>
  );
};

const S = {
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
