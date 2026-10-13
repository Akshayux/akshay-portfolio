export default function HeroPreview(){
  return <div className="hero-preview reveal" aria-label="Selected work preview">
    <div className="hero-preview-frame">
      <video className="hero-preview-video" autoPlay muted loop playsInline preload="auto" aria-label="Akshay Venkata Narayana product design reel">
        <source src="/hero-reel.mp4" type="video/mp4"/>
      </video>
      <span className="hero-preview-kicker">Selected work · LUXTJ</span>
    </div>
  </div>;
}
