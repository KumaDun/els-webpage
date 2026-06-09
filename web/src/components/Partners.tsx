import canadaLifeLogo from '@/assets/partner-canada-life.png'
import manulifeLogo from '@/assets/partner-manulife.png'
import sunLifeLogo from '@/assets/partner-sun-life.svg'
import iaLogo from '@/assets/partner-ia.svg'
import equitableLifeLogo from '@/assets/partner-equitable-life.png'
import forestersLogo from '@/assets/partner-foresters.svg'
import equitableBankLogo from '@/assets/partner-equitable-bank.svg'
import tugoLogo from '@/assets/partner-tugo.png'

const partnersList = [
  { name: 'Canada Life', src: canadaLifeLogo },
  { name: 'Manulife', src: manulifeLogo },
  { name: 'Sun Life Financial', src: sunLifeLogo },
  { name: 'iA Financial Group', src: iaLogo },
  { name: 'Equitable Life of Canada', src: equitableLifeLogo },
  { name: 'Foresters Financial', src: forestersLogo },
  { name: 'Equitable Bank', src: equitableBankLogo },
  { name: 'tugo', src: tugoLogo },
]

export default function Partners() {
  return (
    <section className="section is-secondary">
      <div className="container">
        <div className="partners-layout">
          <div className="header margin-bottom_none">
            <h2 className="heading_primary partners-title">Partners</h2>
          </div>
          <div className="partners-grid">
            {partnersList.map((partner) => (
              <div key={partner.name} className="card on-secondary partner-card">
                <div className="card_body is-center partner-card-body">
                  <img
                    src={partner.src}
                    alt={`${partner.name} Logo`}
                    className="partner-logo-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
