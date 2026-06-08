import { useEffect, useState } from 'react'
import serviceWealthImg from '../assets/service-wealth.avif'
import serviceLoanImg from '../assets/service-loan.avif'
import serviceTaxImg from '../assets/service-tax.avif'

const slides = [
  {
    title: 'Personal Wealth Management',
    desc: 'Comprehensive wealth management strategies tailored to your unique financial goals, ensuring long-term growth and stability for you and your family.',
    img: serviceWealthImg,
  },
  {
    title: 'Insurance Cash Value Loan',
    desc: 'Leverage the cash value of your life insurance policy to access tax-advantaged liquidity without interrupting the compounding growth of your asset.',
    img: serviceLoanImg,
  },
  {
    title: 'Personal Tax Consulting',
    desc: 'Expert tax planning and consulting services designed to minimize your tax liabilities and optimize your overall financial efficiency.',
    img: serviceTaxImg,
  },
]

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="small_section">
      <div className="header is-align-center">
        <h2 className="heading_primary">Services</h2>
      </div>

      <div className="slider-2 w-slider services-slider" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="services-slider-viewport">
          <div
            className="services-slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.title} className="service-slide">
                <section className="hero-heading-left service-slide-content">
                  <div className="container-2">
                    <div className="hero-wrapper">
                      <div className="hero-split service-slide-copy">
                        <h1 className="heading">{slide.title}</h1>
                        <p className="margin-bottom-24px">{slide.desc}</p>
                        <a href="#contact_us_way" className="button-primary w-button">
                          Get Started
                        </a>
                      </div>
                      <div className="hero-split">
                        <img
                          src={slide.img}
                          loading="lazy"
                          alt={slide.title}
                          className="shadow-two"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="w-slider-arrow-left"
          onClick={prevSlide}
          style={{ zIndex: 10, cursor: 'pointer' }}
          role="button"
          aria-label="previous slide"
        >
          <div className="w-icon-slider-left"></div>
        </div>

        {/* Right Arrow */}
        <div
          className="w-slider-arrow-right"
          onClick={nextSlide}
          style={{ zIndex: 10, cursor: 'pointer' }}
          role="button"
          aria-label="next slide"
        >
          <div className="w-icon-slider-right"></div>
        </div>

        {/* Dots Navigation */}
        <div className="w-slider-nav w-slider-nav-invert w-shadow w-round">
          {slides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`w-slider-dot ${current === idx ? 'w-active' : ''}`}
              onClick={() => setCurrent(idx)}
              role="button"
              aria-label={`go to slide ${idx + 1}`}
              style={{ cursor: 'pointer' }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
