

const Varieties = () => {
    return (
        <>
            <section className="-mt-7 bg-[#a79f94]">
                <div class="2xl:container mx-auto">
                    <div className="w-[90%] mx-auto grid grid-cols-1">
                        <div className="flex flex-col justify-center items-center mb-10">
                            <p className="border-4 border-white p-4 text-black  font-bold text-5xl rounded-xl">Varieties</p>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img className="rounded-3xl h-72 border-8 border-[#19435b] max-w-xs transition duration-300 ease-in-out hover:scale-110" src="https://foodvacbags.com/cdn/shop/products/EE-honey_wheat_bread-02_500x_1c28fb1a-a78f-4897-a34c-04de95e10457.jpg?v=1665504620" alt="" />
                            <p className="text-4xl font-bold">Breads</p>
                            <p className="text-xl font-medium">Bread, Baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <img className="rounded-3xl h-72 border-8 border-[#19435b] max-w-xs transition duration-300 ease-in-out hover:scale-110" src="https://www.justasgoodglutenfree.com/wp-content/uploads/2023/02/JAGGFChocChipCookie_stacked_singletilted-1-2029x2048.jpg" alt="" />
                            <p className="text-4xl font-bold">Cookies</p>
                            <p className="text-xl font-medium">The cookies are more peanut than flour and dotted with chocolate chips</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <img className="rounded-3xl h-72 border-8 border-[#19435b] max-w-xs transition duration-300 ease-in-out hover:scale-110" src="https://walkingonsunshinerecipes.com/wp-content/uploads/2022/08/FEATURED-NEW-SIZE-apple-danish.-.jpg" alt="" />
                            <p className="text-4xl font-bold">Pasries</p>
                            <p className="text-xl font-medium">Pastry is characterized by its flaky and crumbly texture, and rich buttery flavor.</p>
                        </div>
                    </div>
                </div>
                <section className="-mt-52 bg-white p-9">
                    <div class="2xl:container mx-auto">
                        <div className="w-[90%] mx-auto grid grid-cols-1">
                            <div className="flex flex-col justify-center items-center mt-52">
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Varieties