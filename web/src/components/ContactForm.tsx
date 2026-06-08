export default function ContactForm() {

  return (
    <section className="section-copy">
      <div className="container">
        <div className="header is-align-center">
          <h2 className="heading_primary">Contact Us</h2>
        </div>

        {/* Contact details grid */}
        <ul id="contact_us_way" role="list" className="grid_2-col gap-xsmall w-list-unstyled">
          {/* Email */}
          <li className="card">
            <div className="card_body-1 is-small">
              <div className="icon is-medium is-background margin-bottom_xsmall">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 6.75H18.75V17.25H5.25V6.75Z"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M5.25 6.75L12 12L18.75 6.75"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="heading_small margin-bottom_none">Email</h3>
              <div className="ix-link-wrapper margin_top-auto">
                <a href="mailto:ossiowu@crius.ca" className="text-link is-large">
                  ossiowu@crius.ca
                </a>
              </div>
            </div>
          </li>

          {/* Phone */}
          <li className="card">
            <div className="card_body-2 is-small">
              <div className="icon is-medium is-background margin-bottom_xsmall">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 18.25C16.2279 18.25 19.25 15.2279 19.25 11.5C19.25 7.77208 16.2279 4.75 12.5 4.75C8.77208 4.75 5.75 7.77208 5.75 11.5C5.75 12.6007 6.01345 13.6398 6.48072 14.5578L5 19L9.71819 17.6519C10.5664 18.0361 11.5082 18.25 12.5 18.25Z"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="heading_small margin-bottom_none">Phone</h3>
              <div className="ix-link-wrapper margin_top-auto">
                <a href="tel:+16729818888" className="text-link is-large">
                  Tel: +1 (672) 981-8888
                </a>
                <br />
                <a href="tel:+16044383690" className="text-link is-large">
                  Fax: +1 (604) 438-3690
                </a>
              </div>
            </div>
          </li>

          {/* Office */}
          <li className="card">
            <div className="card_body-3 is-small">
              <div className="icon is-medium is-background margin-bottom_xsmall">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3918 14.8527C20.2489 10.9956 17.2769 4.25 12 4.25C6.72299 4.25 3.75102 10.9956 7.60817 14.8527L12 19.25L16.3918 14.8527Z"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  ></path>
                  <circle cx="12" cy="10.25" r="2" strokeWidth="1.5" stroke="currentColor"></circle>
                </svg>
              </div>
              <h3 className="heading_small margin-bottom_none">Office</h3>
              <div className="ix-link-wrapper margin_top-auto">
                <a
                  href="https://maps.google.com/?q=Metrotower+2,+4720+Kingsway,+Burnaby,+BC+V5H+4N2,+Canada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link is-large"
                >
                  Suite 2400, Metrotower 2, <br />
                  4720 Kingsway, Burnaby, <br />
                  BC V5H 4N2, Canada
                </a>
              </div>
            </div>
          </li>

          {/* Instagram */}
          <li className="card">
            <div className="card_body-4 is-small">
              <div className="icon is-medium is-background margin-bottom_xsmall">
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect ry="5" rx="5" y="2" x="2" height="20" width="20"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line y2="6.5" y1="6.5" x2="17.51" x1="17.5"></line>
                </svg>
              </div>
              <h3 className="heading_small margin-bottom_none">Instagram</h3>
              <div className="ix-link-wrapper margin_top-auto">
                <a
                  href="https://www.instagram.com/excellentlifestyleinc/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link is-large"
                >
                  @Excellentlifestyleinc
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
