import React from 'react'

export default function DeviceElements() {
  return (
    <div className='Device'>
        <div className='Device-left'>
              <span className='Houre text-xl'>12:30</span>
              <span className="material-symbols-rounded">mark_email_unread</span>
        </div>
        <div className='Device-right'>
              <span className="material-symbols-rounded">alarm</span>
              <span className="material-symbols-rounded">wifi</span>
              <span className="material-symbols-rounded">signal_cellular_alt</span>
              <span className="material-symbols-rounded">battery_5_bar</span>
        </div>
         
    </div>
  )
}
