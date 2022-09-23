import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Airbnb Plus</p>
            <p>Investors</p>
            <p>Airbnb Live</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Community</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>YEA LET GO</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Host</h5>
            <p>How it works</p>
            <p>You want to try out</p>
            <p>I love to code</p>
            <p>I'm a react Dev</p>
            <p>Also Nextjs Dev</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>I can teach you next.js</p>
            <p>WE can do coding challenge</p>
            <p>Airbnb is cool</p>
            <p>Hurray</p>
            <p>You can call me Johnny_boy</p>
        </div>
    </div>
  )
}

export default Footer
