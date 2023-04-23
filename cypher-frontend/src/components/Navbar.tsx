const Navbar = () => {
  return (
    <nav className="px-10 py-3">
      <div className="flex justify-between">
        <div className="h-9 w-9 flex items-center gap-3">
          <img
            src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
            alt="logo"
            className="h-full w-full"
          />
          <h3 className="font-semibold text-xl">CipherSchools</h3>
          <div>
            <span>Browse</span>
          </div>
        </div>
        <div className="flex gap-3">
          <input type="search" name="search" id="search" />
          <div>bell icon</div>
          <div>profile icon</div>
          <div className="flex items-start gap-1">
            <img
              src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
              alt="cp"
              className="h-5 w-5"
            />
            <div className="text-orange-500 font-bold text-lg mt-0 pt-0">0</div>
          </div>
          <div>theme toggle</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
