import React from 'react'

export default function DeviceElements() {
  return (
    <div className='Device'>
        <div className='Device-left'>
              <span className='Houre text-xs'>12:30</span>
              <span className="material-symbols-rounded text-sm">mark_email_unread</span>
        </div>
        <div className='Device-right'>
              <span className="material-symbols-rounded text-sm">alarm</span>
              <span className="material-symbols-rounded text-sm">volume_off</span>
              <span className="material-symbols-rounded text-sm">wifi</span>
              <span className="material-symbols-rounded text-sm">signal_cellular_alt</span>
              <span className="material-symbols-rounded text-sm">battery_5_bar</span>
        </div>
         
    </div>
  )
}
