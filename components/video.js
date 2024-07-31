import Container from "./container";
// import { YouTubeEmbed } from '@next/third-parties/google';

const Video = (props) => {
  return (
    <Container>
      <div className=" flex justify-center items-center w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl">
        <iframe
          width="1000"
          height="500"
          src={props.videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" r
          eferrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </Container>
  );
}

export default Video;