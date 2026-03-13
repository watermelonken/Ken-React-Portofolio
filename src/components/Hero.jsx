function Hero({ lang }) {
  return (
    <div className="hero">

      <div className="hero-box">
        <h3>
          {lang === "en" ? "My introduction :3" : "Perkenalan saya :3"}
        </h3>

        <h1>
          {lang === "en"
            ? "Hello Everyone, I'm Ken."
            : "Halo semuanya, saya Ken."}
        </h1>

        <p>
          {lang === "en"
            ? "I'm a student at MAN 1 MODEL BNA"
            : "Saya adalah siswa di MAN 1 MODEL BNA"}
        </p>

        <span>INFJ | 1w2 | Multifandom</span>
      </div>

      <div className="space">

        {/* Bintang kecil */}
        <div className="stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Shooting star */}
        <div className="shooting-stars">
          <span></span>
          <span></span>
        </div>

        {/* Meteor */}
        <div className="meteors">
          <span></span>
        </div>

      </div>

    </div>
  )
}

export default Hero