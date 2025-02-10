const Header = () => {
  return (
    <header className=' border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container-wrapper'>
        <div className='container flex h-14 items-center'>
          <div className='mr-4 flex'>
            <a className='mr-4 flex items-center gap-2 lg:mr-6' href='/'>
              <span className='font-bold inline-block'>KazOky</span>
            </a>
            <nav className='flex items-center gap-4 text-sm xl:gap-6'></nav>
          </div>

          <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
