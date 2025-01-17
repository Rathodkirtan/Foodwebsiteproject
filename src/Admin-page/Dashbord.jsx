import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

function Dashbord() {
  
 

return (
<main className='main-contain'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>Order</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>300</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>12</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>33</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Contact</h3>
                <BsFillBellFill className='card_icon'/>
            </div>
            <h1>42</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Franchise</h3>
                <i className="fa-solid fa-franc-sign"  style={{color:"white",fontSize:"25px"}} ></i>
            </div>
            <h1>42</h1>
        </div>
    </div>

</main>
)
}

export default Dashbord;
