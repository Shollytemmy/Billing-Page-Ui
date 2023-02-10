import React from 'react'
import AppIcon from './AppIcon'
import BillingIcon from './Atoms/BillingIcon'
import GeralIcon from './Atoms/GeneralIcon'
import {LockIcon} from './Atoms/LockIcon'

import MessageIcon from './Atoms/MessageIcon'
import  History  from './History'

 const BillingPage = () => {
  return (
    <section className='billing-page'>
        <aside className='side-bar col-3'>
            <div className='profile-links'>
                <div className='profile'>
                    <div className='top-profile'>
                        <img src="/img/lady.png" alt="" />
                    </div>
                
                <div className='bio'>
                    <strong>Bunyameen</strong>
                <p className='mail'>@bunyameenn</p>
                </div>
                </div>

                <div className="contact-bio">
                    <div className="message">
                        <a href="/">
                            <GeralIcon /> <span>General</span>
                        </a>
                        
                    </div>

                    <div className="message">
                        <a href="/">
                            <LockIcon /> <span>PassWord</span>

                        </a>
                        
                    </div>

                    <div className="message">
                        <a href="/">
                            <MessageIcon /> <span>Message</span>
                        </a>
                    </div>

                    <div className="message">
                        <a href="/">
                            <BillingIcon /><span>Billing</span>
                        </a>
                    </div>

                    <div className="message">
                        <a href="/">
                            <AppIcon /><span>App</span>
                        </a>
                    </div>
                </div>

                
                
            </div>

            
        </aside>

        <div className='main'>
            <h1>Billing</h1>
            <History />
        </div>
    </section>
  )
}


export default BillingPage