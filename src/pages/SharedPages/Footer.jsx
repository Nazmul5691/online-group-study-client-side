import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <div className='flex'>
        <img className='w-[45px] h-[45px] rounded-full mr-3' src={logo} alt="" />
        <h1 className="font-bold text-blue-500 text-3xl">Learn Hub</h1>
        </div>
        <p>Providing reliable services since 2005</p>
      </aside>
      <nav>
        <header className="footer-title">Technology Products</header>
        <a className="link link-hover">Laptops and Accessories</a>
        <a className="link link-hover">Smartphones and Gadgets</a>
        <a className="link link-hover">Electronics and Appliances</a>
        <a className="link link-hover">Software and Applications</a>
        <a className="link link-hover">Tech Support and Services</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact us</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
