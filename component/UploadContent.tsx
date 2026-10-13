'use client';

import { type FormEvent } from "react";
import { supabase } from "../lib/supabase";

function UploadContent() {

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const memory = {
    title: String(formData.get("title") ?? "").trim(),
    memory_date: String(formData.get("memory_date") ?? ""),
    description: String(formData.get("description") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
  };

  try {
    
    const { data: saveMemory, error } = await supabase
    .from("memories")
    .insert(memory)
    .select("id")
    .single();

    if (error) {
        alert (`Gagal Menyimpan Memori: ${error.message}`);
        return;
    }

    const files = formData
    .getAll("media")
    .filter((value): value is File => value instanceof File && value.size > 0);

    const mediaRows = [];

    for (const [sortOrder, file] of files.entries()) {
        const storagePath = `${saveMemory.id}/${crypto.randomUUID()}`;

        const { error: uploadError } = await supabase.storage
        .from("memory-media")
        .upload(storagePath, file, {contentType: file.type});

        if (uploadError) {
            alert(`Gagal mengunggah ${file.name}: ${uploadError.message}`);
            return;
        }

        mediaRows.push({
            memory_id: saveMemory.id,
            storage_path: storagePath,
            media_type: file.type.startsWith("video/") ? "video" : "image",
            sort_order: sortOrder,
        });

        if (mediaRows.length > 0) {
            const { error: mediaError } = await supabase
            .from("memory_media")
            .insert(mediaRows);

            if (mediaError) {
                alert(`File terunggah, tetapi gagal menyimpan datanya: ${mediaError.message}`);
                return;
            }
        }
    }
    console.log("Memory ID:", saveMemory.id);

    alert("Memory berhasil disimpan.");
    form.reset();

  } catch (error) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan yang tidak diketahui.";
    alert(`Gagal menghubungkan Supabase: ${message}`);
  }
}
    return (
        <div className="bg-[url(/assets/bg21.jpg)] bg-center bg-cover rounded-[30px] w-[1290px] h-[550px] shadow-xl/20">
            <div className="items-center text-center text-[20px] font-extralight pt-10 mt-20">
                <h1>Because every moment we capture is worth keeping and cherishing, preserving little memories in warm colors that tell our stories.</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 justify-center w-5xl mx-auto mt-20">
                
                    {/* Upload Files */}
                    <div className="grid flex items-center ">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium rounded-[30px]">
                            <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" name="media" className="hidden" accept="image/*,video/*" multiple />
                        </label>
                    </div> 
                    {/* Upload Files */}

                    {/* Details Memory */}
                
                    <div className="grid">
                        <div>
                            <label htmlFor="memory-title" className="block mb-2.5 text-sm font-medium text-heading">Title Your Memory's</label>
                            <input type="text" id="memory-title" name="title" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="memory-date" className="block mb-2.5 text-sm font-medium text-heading">Special Date</label>
                            <input type="date" id="memory-date" name="memory_date" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="memory-description" className="block mb-2.5 text-sm font-medium text-heading">Tell Your Story</label>
                            <textarea id="memory-description" name="description" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="memory-address" className="block mb-2.5 text-sm font-medium text-heading">Where the Best Moments Happen</label>
                            <input type="text" id="memory-address" name="address" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-[30px]" placeholder="" required />
                        </div>
                    </div>
                </div>
                {/* Details Memory */}

                {/* Button Sumbit */}
                <div className="flex justify-center mt-6">
                    <button type="submit" className="text-white bg-[#558297] hover:bg-[#558297]/90 focus:ring-4 focus:outline-none focus:ring-[#558297]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#558297]/55 me-2 mb-2">
                    Upload the Memory
                </button>
                </div>
                {/* Button Sumbit */}
            </form>
        </div>
    )
}

export default UploadContent;