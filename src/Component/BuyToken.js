import React from 'react'
import { Link } from 'react-router-dom'

const BuyToken = () => {
  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
    <div className='main'>
       <div className='firstDiv'>
        <div className='HeadingDiv'>
          <h1>
          The  $MART <br/>TOKEN
          
          </h1>
          <h5>POWERING SMARTSTAKING ECOSYSTEM</h5>
          <p>The SMARTSTAKING Protocol is a multi-chain that uses the  <br/><span>($MART TOKEN)</span>as the utility token for cross-chain transactions and interactions </p>
        </div>
        
        <button className='stakeBtn'><Link to={'/Staking'} className='linstylebutton'>STAKE $MART TOKEN </Link></button>
       </div>

       <div className='leftmainDiv'>
        <div className='leftDIV'>
          <div className='swap'>
            <div className='imagediv'>
              <img src='\assets\images\shape\logoicon.svg' className='downloadImage'/>
              <h6>$MART SWAP</h6>
            </div>
            <button>CONNECT</button>
          </div>
         <div className='inputDIV'>
           <div className='availableHeading'><p>available:</p></div>
           <div className='secondInputDiv'>
           <input className='inputField' type='number 0'/>
           <img src='\assets\images\logo\gas.png' className='BNB_logo'/>
           <button>BNB</button>
           </div>
           <div className='Btn_collection'>
            <button>25%</button>
            <button>50%</button>
            <button>75%</button>
            <button>MAX%</button>
           </div>
           

           
         </div>

         <div className='inputDIV'>
           <div className='availableHeading'><p>Balance:</p></div>
           <div className='secondInputDiv'>
           <input className='inputField'/>
           <img src='assets\images\shape\logoicon.svg' className='BNB_logo'/>
           <button>STAKING</button>
           </div>
           <div className='Btn_collection1'>
            <button>Approve</button>
            <button>Swap</button>
            
           </div>
           <p className='bottomtext'>Powered by $MART</p>

           
         </div>





          
        </div>
       </div>
    </div>  
    </div>
</div>
        
  
    
  )
}

export default BuyToken