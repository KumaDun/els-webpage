import ossioPhoto from '../assets/team-ossio.jpg'
import henryPhoto from '../assets/team-henry.jpeg'
import yuenyuenPhoto from '../assets/team-yuenyuen.jpeg'
import willPhoto from '../assets/team-will.jpeg'

const teamList = [
  {
    name: 'Ossio Wu',
    role: 'Founder',
    src: ossioPhoto,
    divClass: 'inline-div-0',
    imgClass: 'image_cover-copy',
  },
  {
    name: 'Will Wu',
    role: 'Co-Founder',
    src: willPhoto,
    divClass: 'inline-div-2',
    imgClass: 'image_cover',
  },
  {
    name: 'Henry Chiu',
    role: 'Senior Financial Advisor',
    src: henryPhoto,
    divClass: 'inline-div-2',
    imgClass: 'image_cover',
  },
  {
    name: 'Yuen Yuen Chang',
    role: 'Senior Financial Advisor',
    src: yuenyuenPhoto,
    divClass: 'inline-div-1',
    imgClass: 'image_cover',
  },
]

export default function AboutUs() {
  return (
    <section className="small_section">
      <div className="container">
        <div className="header is-align-center">
          <h2 className="heading_primary">About Us</h2>
        </div>
        <div className="team-marquee">
          <div className="team-marquee-track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? 'duplicate' : 'primary'}
                className="team-marquee-group"
                aria-hidden={isDuplicate || undefined}
              >
                {teamList.map((member) => (
                  <div
                    key={`${isDuplicate ? 'duplicate' : 'primary'}-${member.name}`}
                    className="card team-marquee-card"
                  >
                    <div className="card_body is-align-center">
                      <div className={`image-ratio_1x1 ${member.divClass}`}>
                        <img
                          src={member.src}
                          alt={isDuplicate ? '' : member.name}
                          className={member.imgClass}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="heading_small">{member.name}</h3>
                      <p className="paragraph_small text-color_muted">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
