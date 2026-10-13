function UploadContent() {
    return (
        <div className="bg-[url(/assets/bg12.jpg)] bg-center bg-cover rounded-[30px] w-[1290px] h-[550px] shadow-xl/20">
            <div className="items-center text-center text-[20px] font-extralight pt-10 mt-20">
                <h1>Because every moment we capture is worth keeping and cherishing, preserving little memories in warm colors that tell our stories.</h1>
            </div>
            
            <div className="grid grid-cols-2 gap-4 justify-center w-5xl mx-auto mt-20">
                
                <div className="grid flex items-center ">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium rounded-[30px]">
                        <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
                <div className="grid">
                    <div>
                        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">Title Your Memory</label>
                        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">Special Date</label>
                        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">Tell Your Story</label>
                        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">Where the Best Moments Happen</label>
                        <input type="text" id="visitors" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button type="button" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
                Upload the Memory
              </button>
            </div>
        </div>
    )
}

export default UploadContent;