


const Sweets = () => {
    return (
        <>
            <section className="py-5 bg-img pb-28">
                <div class="2xl:container mx-auto">
                    <div className="w-[90%] mx-auto grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center m-6">
                            <p className="border-4 border-white p-4 text-white  font-bold text-5xl rounded-xl">Sweets</p>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-white p-9 rounded-3xl border-8 border-[#f48739] max-w-xs transition duration-300 ease-in-out hover:scale-110">
                            <p className="text-black font-bold text-4xl py-5">Cookies</p>
                            <div className="flex flex-col justify-start items-start gap-3">
                                <p className="text-black font-medium text-xl"> —
                                    Chocolate Chip </p>
                                <p className="text-black font-medium text-xl"> —
                                    Oatmeal Pecan</p>
                                <p className="text-black font-medium text-xl"> —
                                    Oat Ginger Bar </p>
                                <p className="text-black font-medium text-xl"> —
                                    Seasonal specials </p>
                            </div>
                        </div>

                        <div className="bg-white p-9 rounded-3xl border-8 border-[#f48739] max-w-xs transition duration-300 ease-in-out hover:scale-110">
                            <p className="text-black font-bold text-4xl py-5">Scones</p>
                            <div className="flex flex-col justify-start items-start gap-3">
                                <p className="text-black font-medium text-xl"> —
                                    Classic butter scone  </p>
                                <p className="text-black font-medium text-xl"> —
                                    Fresh fruit buttermilk scones </p>
                                <p className="text-black font-medium text-xl"> —
                                    Handmade scones </p>
                            </div>
                        </div>

                        <div className="bg-white p-9 rounded-3xl border-8 border-[#f48739] max-w-xs transition duration-300 ease-in-out hover:scale-110">
                            <p className="text-black font-bold text-4xl py-5">Other</p>
                            <div className="flex flex-col justify-start items-start gap-3">
                                <p className="text-black font-medium text-xl"> —

                                    Seasonal galletes </p>
                                <p className="text-black font-medium text-xl"> —
                                Tartlets </p>
                                <p className="text-black font-medium text-xl"> —
                                Banana Bread </p>
                                <p className="text-black font-medium text-xl"> —
                                Bread Pudding </p>
                                <p className="text-black font-medium text-xl"> —
                                Cranberry Pecan Granola</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sweets