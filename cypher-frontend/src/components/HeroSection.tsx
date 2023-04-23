const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center px-20 py-3 bg-gray-200">
        <div className="flex gap-3 items-center">
          <div className="w-16 h-16 rounded-full bg-slate-800"></div>
          <div>
            <p className="text-lg font-light">Hello,</p>
            <h3 className="text-2xl font-semibold">Rajat Raghuvanshi</h3>
            <p className="text-md font-light">rajat.karnal@gmail.com</p>
          </div>
        </div>
        <div className="text-lg font-medium">69 Followers</div>
      </div>
    </section>
  );
};

export default HeroSection;
