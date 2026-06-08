export default function Footer() {
  return (
    <footer className="footer is-inverse">
      <div className="container">
        <nav className="grid_5-col gap-small">
          <div className="grid-item-manual">
            <div className="flex_vertical gap-small">
              <div className="ix-link-wrapper">
                <a href="#" className="logo-link w-inline-block">
                  <div className="nav_logo-icon">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 33 33"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="paragraph_xlarge margin-bottom_none text_all-caps">
                    ELS Wealth
                  </div>
                </a>
              </div>
            </div>
            <ul
              role="list"
              aria-label="Social media links"
              className="footer_icon-group margin_top-auto w-list-unstyled"
            >
              <li className="margin-bottom_none"></li>
              <li className="margin-bottom_none"></li>
              <li className="margin-bottom_none"></li>
            </ul>
          </div>
        </nav>
        <div className="divider margin-top_xsmall margin-bottom_xsmall"></div>
        <nav className="footer_bottom">
          <div className="ix-link-wrapper">
            <div className="text-color_secondary">All rights reserved © 2025 ELS Wealth</div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
