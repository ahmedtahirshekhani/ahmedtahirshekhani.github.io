import Link from 'next/link';

const PrimaryNavbar = () => {

    return(
        <div className='container mx-auto my-5'>
        <div className="navbar bg-primary text-primary-content rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-orange-600">
        <li><Link href={'/about'}>About Me</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Projects
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-orange-700" >
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Contact Now</a></li>

      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" href={'/'}>Ahmed Tahir Shekhani</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/about'}>About Me</Link></li>
      <li tabIndex={0}>
        <a>
          Projects
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-orange-600">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end  hidden lg:flex">
    <a className="btn">Contact Now!</a>
  </div>
</div>
</div>
    )
}

export default PrimaryNavbar;