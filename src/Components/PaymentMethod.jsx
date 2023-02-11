import React from 'react'
import AccessIcon from './Atoms/AccessIcon'

export const PaymentMethod = () => {
  return (
    <div>
        <p className='payment-method'>Payment Method</p>
        <p className='payment-text'>Manage billing information and view receips</p>

        <div className='bottom-bank'>
            <div className='bank-icon'>
                <AccessIcon /> <span className='visa-text'>Visa ending in 2255</span>
            </div>
            <p>Remove</p>
        </div>
    </div>
  )
}
