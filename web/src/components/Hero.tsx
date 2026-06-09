import heroBg from '@/assets/hero-bg.avif'

export default function Hero() {
  return (
    <div className="container" style={{ padding: '2rem 1.5rem' }}>
      <div className="hero-overlay-section" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        aspectRatio: '16/9',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Image */}
        <img
          width="1216"
          height="832"
          alt="ELS Wealth Hero Background"
          src={heroBg}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        />

        {/* Readability Overlay Gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.72))',
          zIndex: 2
        }} />

        {/* Hero Content Overlay */}
        <div className="header margin-bottom_none" style={{
          position: 'relative',
          zIndex: 3,
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '750px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 className="heading_hero" style={{
            fontSize: 'calc(1.8rem + 2.5vw)',
            lineHeight: '1.25',
            fontWeight: '700',
            marginBottom: '1.25rem',
            color: 'rgba(255, 255, 255, 0.85)'
          }}>
            <span className="hero-intro-text" style={{
              display: 'block',
              fontSize: '1.05rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '0.75rem',
              color: 'rgba(255, 255, 255, 0.85)'
            }}>
              Provide your financial lifestyle with
            </span>
            Envision, Elevation, Excellence
          </h1>
          <div className="subheading rich-text" style={{
            fontSize: '1.2rem',
            lineHeight: '1.65',
            color: 'rgba(255, 255, 255, 0.85)',
            margin: '0 auto',
            maxWidth: '600px'
          }}>
            <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)' }}>
              Professional investment consulting for individuals and businesses. Achieve your
              financial goals with tailored strategies and expert support.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
