import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='navbar flex mx-5 my-4 space-x-8 mb-20 text-2xl justify-center items-center   '>
          <Link href={'/home'}><li>Home</li></Link>
          <Link href={'/about'}> <li>About</li></Link>
          <Link href={'/blog'}> <li>Blog</li></Link>
          <Link href={'/contact'}> <li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
