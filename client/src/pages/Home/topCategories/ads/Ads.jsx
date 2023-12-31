import React from 'react'
import AdCard1 from './AdCard1';
import AdCard2 from './AdCard2';
import './style.css'
import fruitevegi from '../../../../assets/fruitvegi.jpg' 
import eggDairy from '../../../../assets/dairy.jpg'
import snacks from '../../../../assets/snacks.jpg'
import beverages from '../../../../assets/baverage.png'
import grains from '../../../../assets/grains.jpg'

export default function Ads() {
  return (
    <div id="ads-container" className='flex-box justify-center align-center'>
        <div className="ads-container flex-box justify-center align-center flex-column">
            <div className="upper-container">
                <AdCard1 bg={fruitevegi} category="Fresh And Organic" title="Fruits And Vegitables" description="Fresh picks for a healthier you: fruits & veggies galore!" btnText="Shop Now"/> 
                <AdCard1 bg={eggDairy} category="100% Pure And Fresh" title="Dairy And Eggs" description="Nature's Nutrient-Rich Bounty: Fresh Eggs and Dairy Delights!" btnText="Shop Now"/> 
            </div>
            <div className="lower-container">
                <AdCard2 bg={snacks} type="third" title="Snacks And Cookies" subtitle="Savor Snacktime Delights and Heavenly Cookies!"/>
                <AdCard2 bg={beverages} type="fourth" title="Beverages" subtitle="Quenching Thirsts, One Sip at a Time: Explore Our Beverage Bliss!"/>
                <AdCard2 bg={grains} type="fifth" title="Grains and Pasta" subtitle="Elevate Every Meal with Premium Grains and Pasta!"/>
            </div>
        </div>
    </div>
  )
}
