import logoImg from '@/assets/logo.png'

export default function Navbar() {
  return (
    <div className="navbar-no-shadow">
      <div role="banner" className="navbar-no-shadow-container w-nav">
        <div className="container-regular">
          <div className="navbar-wrapper">
            <a href="/" aria-current="page" className="navbar-brand w-nav-brand w--current">
              <img
                src={logoImg}
                loading="lazy"
                width="100"
                alt="Excellent Life Style Wealth Logo"
                className="image-3"
              />
            </a>
            <div className="text-block navbar-brand-title">Excellent Lifestyle Wealth</div>
          </div>
        </div>
      </div>
    </div>
  )
}
