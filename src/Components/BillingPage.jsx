import React from 'react'
import AppIcon from './AppIcon'
import BillingIcon from './Atoms/BillingIcon'
import GeralIcon from './Atoms/GeneralIcon'
import {LockIcon} from './Atoms/LockIcon'

import MessageIcon from './Atoms/MessageIcon'

export const BillingPage = () => {
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
                        <GeralIcon /> <span>General</span>
                    </div>

                    <div className="message">
                        <LockIcon /> <span>PassWord</span>
                    </div>

                    <div className="message">
                        <MessageIcon /> <span>Message</span>
                    </div>

                    <div className="message">
                        <BillingIcon /><span>Billing</span>
                    </div>

                    <div className="message">
                        <AppIcon /><span>App</span>
                    </div>
                </div>

                
                
            </div>

            
        </aside>
    </section>
  )
}
