import React,{useEffect} from 'react'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
const Section_3 = () => {

  useEffect(() =>{
    AOS.init({duration: 800})
    },[])
  return (
    <section className="project padding-bottom project--completed2">
    <div className="container">
      <div className="section-header section-header--middle">
        <div className="section-header__content">
          <div className="section-header__titlebar">
            <p className="section-header__subtitle"> Tokenomics </p>
            <h2 className="section__header__title">Token Information</h2>
          </div>
        </div>
      </div>
      <div className="project__wrapper">
        <div className="row g-4">
          <div className="col-12">
            <div className="project__item2 position-relative" data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/allocation.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Allocation
                    </h4>
                    <p>For incentivizing staking and liquidity provision</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                 
                   
                  <h6><span className="color--theme-color">1,500,000</span> / <span> tokens (15%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/community_eng.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4> Marketing & Community Engagement
                    </h4>
                    <p>Fund’s marketing campaigns, partnerships, events, etc</p>
                  </div>
                </div>
              
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                 
                  <h6><span className="color--theme-color">500,000</span> / <span>tokens (5%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/product_dev.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Product Development
                    </h4>
                    <p>Supports ongoing development, enhancements, and security</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                  
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">500,000</span> / <span>tokens (5%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/fair_luanch.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Fair Launch
                    </h4>
                    <p>Facilitates a decentralized distribution during the public launch</p>
                  </div>
                </div>
              
                <div className="project__item2-time">
                 
                </div>
                
                <div className="project__item-amount">
                 
                  <h6><span className="color--theme-color">7,000,000</span> / <span>tokens (70%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/team.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Team
                    </h4>
                    <p>Rewards the core team for their invaluable contributions</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">500,000</span> / <span>tokens (5%)
                    </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Section_3