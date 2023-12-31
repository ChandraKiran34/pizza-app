import React from 'react'
import Insta from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import "../Styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Insta />
            <Twitter />
            <Facebook />
            <LinkedIn />
        </div>
        <p>&copy; 2023 ChandraKiranpizza.com</p>
    </div>
  )
}

export default Footer
