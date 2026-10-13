import UploadContent from "../component/UploadContent";

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
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}

      {/* Special Memory */}
      <div className= "grid grid-cols-2 gap-4 w-full max-w-screen-xl px-6 mx-auto mt-40">
        <div className="">
          <div className="grid grid-cols-1 gap-y-6 w-full max-w-screen-xl px-6 mx-auto">
            <div className="grid text-left text-[50px] font-bold">
              <h1>Together we</h1>
              <h1>color special times</h1>
            </div>
            <div className="text-left text-[20px] font-extralight">
              <h1>Because every second we pass is worth remembering </h1>
              <h1>and celebrating, in warm colors</h1>
              <h1>full of stories.</h1>
            </div>
            <div>
              <img src="/assets/bg10.jpg" alt="bg6" className="h-[350px] w-[700px] rounded-[30px] shadow-xl/20" />
            </div>
          </div> 
        </div>
        <div>
          <img src="/assets/bg6.jpg" alt="bg6" className="h-[450px] w-[700px] rounded-[30px] shadow-xl/20" />
          <img src="/assets/bg11.jpg" alt="bg6" className="h-[300px] w-[700px] rounded-[30px] shadow-xl/20 mt-15" />
        </div>
        
      </div>
      
      {/* Special Memory */}

      {/* Upload Content */}
      <div className="grid grid-cols-2 gap-4 items-center justify-center mt-40">
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
              </button>
          </div>
        </div>
      </div>
      {/* Upload Content */}

      {/* List Memory */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl px-6 mx-auto mt-40">
        <div className="pt-10 mt-20 text-[60px] font-bold text-left">
          <h1>Your Memory’s With</h1>
          <h1>MomentoBox</h1>
        </div>
        <div className="col-start-2 text-right text-[20px] font-extralight pt-10 mt-20">
          <h1>a place where every memory is neatly </h1>
          <h1>stored, kept safe, and always ready to be </h1>
          <h1>remembered at any time</h1>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl px-6 mx-auto mt-20">
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-[30px] shadow-xs">
            <a href="#">
                <img className="rounded-[30px]" src="/assets/bg17.jpg" alt="" />
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Preparing for the Party</h5>
                <p className="text-sm font-extralight ">May 13, 2026</p>
                <p className="text-sm font-extralight ">Jorge's House</p>
                <p className="mb-6 text-body">A group of friends working together to decorate an indoor room with festive Canadian flag bunting for an upcoming celebration.</p>
            </a>
        </div>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-[30px] shadow-xs">
            <a href="#">
                <img className="rounded-[30px]" src="/assets/bg18.jpg" alt="" />
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Festive Gathering at the Temple</h5>
                <p className="text-sm font-extralight ">August 20, 2026</p>
                <p className="text-sm font-extralight ">Temples in India</p>
                <p className="mb-6 text-body">People gathering around an ornate temple decorated with orange marigold garlands and colorful festive flags under a bright blue sky.</p>
            </a>
        </div>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-[30px] shadow-xs">
            <a href="#">
                <img className="rounded-[30px]" src="/assets/bg19.jpg" alt="" />
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Setting the Dinner Table</h5>
                <p className="text-sm font-extralight ">June 15, 2026</p>
                <p className="text-sm font-extralight ">Catherine's Birthday Party</p>
                <p className="mb-6 text-body">Family members and friends thoughtfully decorating and arranging greenery on a beautifully lit dining table for a warm holiday dinner.</p>
            </a>
        </div>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-[30px] shadow-xs">
            <a href="#">
                <img className="rounded-[30px]" src="/assets/bg20.jpg" alt="" />
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Vibrant Street Celebration</h5>
                <p className="text-sm font-extralight ">August 20, 2026</p>
                <p className="text-sm font-extralight ">City Center</p>
                <p className="mb-6 text-body">A bustling city street filled with pedestrians and motorbikes, beautifully shaded beneath hundreds of red celebratory flags hanging overhead.</p>
            </a>
        </div>
      </div>

      {/* List Memory */}
      
      {/* List Memory Content */}
      <div className="p-10 mt-15 mx-auto mt-40">
        <UploadContent />
      </div>
      {/* List Memory Content */}
    </div>
  );
}
