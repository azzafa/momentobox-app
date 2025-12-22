export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center min-h-screen">
        <div className="text-center text-white mt-20 text-[96px] font-bold">
          <h1>MomentoBox</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-base text-left text-white mt-4">
            <div>
              <span className="font-bold text-[24px]">More</span>
              <span className="font-extralight text-[20px]"> moments </span>
            </div>
            <div>
              <span className="font-extralight">but a </span>
              <span className="font-bold text-[24px]">Piece</span>
              <span className="font-extralight text-[20px]"> of the </span>
              <span className="font-bold text-[24px]">Story</span>
              <span className="font-extralight text-[20px]"> that </span>
              <span className="font-bold text-[24px]">Breathes</span>
            </div>
          </div>
          <div className="pt-10 pl-30 text-[20px]">
            <h1 className="text-left font-extralight  text-white">In every frame there is laughter, love,</h1>
            <h1 className="text-left font-extralight text-white">and the warmth of togetherness</h1>
          </div>
          <div className="col-start-2 pl-30">
            <div className="col-span-2">
              <button type="button" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
              Find Out More
              <svg 
              className="w-6 h-6 text-gray-800 dark:text-white left-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}

      {/* Special Memory */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl px-6 mx-auto">
        <div className="text-left text-[20px] font-extralight">
          <h1>Because every second we pass is worth</h1>
          <h1>remembering and celebrating, in warm colors</h1>
          <h1>full of stories.</h1>
          <div className="pt-4">
            <button type="button" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
              Check Now !!
              <svg 
              className="w-6 h-6 text-gray-800 dark:text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
              </button>
          </div>
        </div>
        <div className="col-start-2 text-right text-[60px] font-bold">
          <h1>Together we</h1>
          <h1>color special times</h1>
        </div>
      </div>
      {/* Special Memory */}

      {/* Special Memory Content */}
      <div className="bg-[#DBA957] h-[600px] w-[1250px] p-10 mt-15 rounded-[30px] bg-cover bg-center mx-auto">

      </div>
      {/* Special Memory Content */}

      {/* Upload Content */}
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-10 mt-20 pl-13 ">
          <img src="/assets/bg5.jpeg" alt="bg5" className="h-[450px] w-[700px] rounded-[30px] shadow-xl/20" />
        </div>
        <div className="col-start-2 pt-25 pl-5 mt-20">
          <div className="text-[24px] font-extralight text-left">
            <h1>Every precious</h1>
            <h1>moment is worth saving</h1>
          </div>
          <div className="text-[64px] font-bold text-left">
            <h1>MomentoBox</h1>
          </div>
          <div className="text-[24px] font-extralight text-left">
            <h1>Become a place where memories live and are</h1>
            <h1>preserved, not just stored. Because storing memories</h1>
            <h1>is not  about space, but about meaning.</h1>
          </div>
          <div className="pt-4">
            <button type="button" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
              Save Now !
              <svg 
              className="w-6 h-6 text-gray-800 dark:text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
              </button>
          </div>
        </div>
      </div>
      {/* Upload Content */}

      {/* List Memory */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl px-6 mx-auto">
        <div className="pt-10 mt-20 text-[60px] font-bold text-left">
          <h1>Your Memory’s With</h1>
          <h1>MomentoBox</h1>
        </div>
        <div className="col-start-2 text-right text-[20px] font-extralight pt-10 mt-20">
          <h1>a place where every memory is neatly </h1>
          <h1>stored, kept safe, and always ready to be </h1>
          <h1>remembered at any time</h1>
          <div className="pt-4">
            <button type="button" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
              Open Your Story
              <svg 
              className="w-6 h-6 text-gray-800 dark:text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
              </button>
          </div>
        </div>
      </div>
      {/* List Memory */}
      
      {/* List Memory Content */}
      <div className="p-10 mt-15 mx-auto">

      </div>
      {/* List Memory Content */}
    </div>
  );
}
