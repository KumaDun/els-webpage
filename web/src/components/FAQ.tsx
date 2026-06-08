const faqList = [
  {
    q: 'How do I start a consultation?',
    a: 'Contact us via our form or email to schedule your first meeting. We’ll review your needs and outline next steps.',
  },
  {
    q: 'How can I contact support?',
    a: 'Reach our team by email or the website form. We reply within one business day.',
  },
  {
    q: 'What’s included in your services?',
    a: 'All plans include investment advice, portfolio reviews, and regular updates. Premium plans add detailed reporting and extra support.',
  },
]

export default function FAQ() {
  return (
    <section className="section is-secondary">
      <div className="container">
        <div className="header is-align-center">
          <h2 className="heading_primary">Answers to your key questions</h2>
        </div>
        <div className="w-layout-grid grid_2-col gap-medium">
          {faqList.map((item, index) => (
            <div key={index} className="content-block">
              <h3 className="paragraph_xlarge">{item.q}</h3>
              <div className="rich-text text-color_secondary w-richtext">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex_vertical is-x-center margin-top_medium">
          <div className="ix-link-wrapper">
            <a href="#contact_us_way" className="button-primary w-button">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
