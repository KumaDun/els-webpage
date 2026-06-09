import alexAvatar from '@/assets/client-alex.avif'
import morganAvatar from '@/assets/client-morgan.avif'

const testimonialsList = [
  {
    name: 'Alex Rivera',
    avatar: alexAvatar,
    quote:
      'ELS Wealth made my investment planning simple and effective. Their guidance was clear and easy to follow.',
    alt: 'Alex Rivera - Headshot of ELS Wealth customer',
  },
  {
    name: 'Morgan Lee',
    avatar: morganAvatar,
    quote:
      'Working with ELS Wealth gave me clarity and assurance. Their team is knowledgeable and reliable.',
    alt: 'Morgan Lee - Headshot of satisfied ELS Wealth customer',
  },
]

export default function Testimonials() {
  return (
    <section className="section is-secondary">
      <div className="container">
        <div className="header is-align-center">
          <h2 className="heading_primary">What Our Clients Say</h2>
        </div>
        <div className="w-layout-grid grid_2-col tablet-1-col-1-2 gap-xsmall">
          {testimonialsList.map((item, index) => (
            <div key={index} className="card on-secondary">
              <div className="card_body is-align-center gap-small">
                <div className="flex_vertical is-x-center gap-xxsmall">
                  <div className="avatar">
                    <img
                      width="1024"
                      height="1024"
                      alt={item.alt}
                      src={item.avatar}
                      loading="lazy"
                      className="image_cover"
                    />
                  </div>
                  <div className="author_name">{item.name}</div>
                </div>
                <div className="flex_vertical is-y-center flex-child_expand">
                  <p className="quote">"{item.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
