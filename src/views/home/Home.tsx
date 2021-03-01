/**
 * @description home 화면
 */
import React, { useEffect, useState } from "react";
import { firebaseStorage } from "../../config/firebase.config";
import * as s from "./Home.styled";

// console.log(firebaseStorage.ref("images/1.jpeg").getDownloadURL());

const Home = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    async function fetchImageFromStorage() {
      const urls = await firebaseStorage.ref("/1.png").getDownloadURL();
      setImageUrl(urls);
    }

    fetchImageFromStorage();
  }, []);

  return (
    <s.HomeContainer>
      <s.ImageWrapper>
        <s.ImageWrapperRow>
          {/* <s.imageTest uri={imageUrl} /> */}
          <s.HomeImage src="" alt="s.HomeImage2" />
          <s.HomeImage src="" alt="s.HomeImage3" />
        </s.ImageWrapperRow>
        <s.ImageWrapperRow>
          <s.HomeImage src="" alt="s.HomeImage4" />
          <s.HomeImage src="" alt="s.HomeImage5" />
        </s.ImageWrapperRow>
      </s.ImageWrapper>
    </s.HomeContainer>
  );
};

export default Home;
