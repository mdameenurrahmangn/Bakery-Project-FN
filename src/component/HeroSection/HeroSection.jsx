

const HeroSection = () => {
    return (
        <>
            <section class="py-5 bg-black">
                <div class="2xl:container mx-auto">
                    <div class="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
                        <div class="flex flex-row justify-center items-center">
                            <img src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/Hero%20section%20Logo.png" alt="" />
                        </div>

                        <div class="flex flex-col  items-center justify-center gap-4">
                            <img className="h-36" src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/Bakery%20Logo.png" alt="" />
                            <p class="text-white text-5xl font-bold text-center">Delicious Breads
                            </p>
                            <p class="text-white text-lg text-center font-semibold">Bake bread, rolls, biscuits, muffins, scones, cakes, and more! Fool-proof recipes and techniques for working with yeast-leavened doughs, quick bread, and pastries</p>
                            <button class="text-white  font-bold text-base  p-3 w-36 border-4 border-white rounded-xl hover:bg-white hover:text-black">View products</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection