export default function Title({ title, phrase }) {
  return (
    <>
      <div className="relative w-full mx-auto p-4 py-10 pb-28 flex bg-black text-white font-mulish uppercase text-5xl font-black">
        <div className="relative w-full max-w-screen-2xl mx-auto p-4 py-10 pb-8 flex bg-black text-white font-mulish uppercase text-5xl font-black">
          {title}
        </div>
      </div>
      <div className="relative w-full max-w-screen-2xl mx-auto p-4 pb-10 -mt-20 flex text-white font-mulish uppercase text-3xl font-black">
        <div className="bg-orange-600 w-full rounded-xl px-10 pt-40 pb-10">
          <div className="w-full md:w-2/6">{phrase}</div>
        </div>
      </div>
    </>
  );
}
