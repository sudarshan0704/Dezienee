import Image from "next/image";

const videoUrl = "https://www.youtube.com/watch?v=Y-x0efG1seA";

export default function IntroVideoSection() {
  return (
    <section className="intro-video" aria-label="Meet our design studio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-video-box">
              <div className="intro-video-image">
                <a href={videoUrl} className="popup-video" data-cursor-text="Play" aria-label="Play our studio introduction">
                  <figure className="image-anime"><Image src="/images/intro-video-bg.jpg" alt="A welcoming interior designed by Dezinee" width={1800} height={900} /></figure>
                </a>
              </div>
              <div className="video-play-button">
                <a href={videoUrl} className="popup-video" data-cursor-text="Play">play</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
