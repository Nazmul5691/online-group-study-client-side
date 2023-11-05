import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="footer px-10 py-20 bg-black text-white">
      <aside>
        <div className="flex">
          <img className="w-[45px] h-[45px] rounded-full mr-3" src={logo} alt="" />
          <h1 className="font-bold text-blue-500 text-3xl mt-2">Learn Hub</h1>
        </div>
        <p className="ml-2">Empowering Learning Together</p>
      </aside>
      <nav>
        <header className="footer-title">Study Resources</header>
        <a href="/assignment" className="link link-hover">Assignment</a>
        <a href="/myAssignment" className="link link-hover">My Assignment</a>
        <a href="/submittedAssignment" className="link link-hover">Submitted Assignment</a>
        <a href="/assignment" className="link link-hover">Study Groups</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>

      <div>
        <h2>Copyright © 2023 Learn Hub. <br /> All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
