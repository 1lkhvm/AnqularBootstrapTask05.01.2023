import React from 'react'
import './style.scss'
export default function FooterComponents() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer'>
                    <div className='footer-logo'>
                        <div>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </div>
                    <div className='footer-text'>
                    <p>Copyright © Your Website 2020</p>
                    </div>
                </div>

            </div>

        </>
    )
}
