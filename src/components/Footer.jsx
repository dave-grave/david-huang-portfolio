import React from 'react';

function Footer() {
    return (
        <div className ="py-5 text-center">
            {/* code for some icons for socials */}
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} 
                David Huang.
                All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;