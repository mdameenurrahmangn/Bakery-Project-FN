

const OurBread = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="2xl:container mx-auto">
                    <div className="w-[90%] mx-auto grid grid-cols-1">
                        <h1 className="text-black text-6xl font-bold text-center">Our Bread</h1>
                        <p className="text-black text-lg text-center font-medium p-6">The richest of all yeasted breads, the HBC version contains almost as much butter as
                            flour and a healthy portion of fresh eggs, durum flour, and our sourdough starter for
                            extended shelf life</p>
                    </div>

                    <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55] bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center  space-y-2 transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2019/06/blueberry-muffins-5-1200-368x368.jpg" alt="" />
                            <p className="font-bold text-2xl">Blueberry Muffins</p>
                            <p className="text-center">Blueberry muffins with golden brown domed tops.</p>
                            <p className="font-bold text-xl text-green-800">$5.2</p>
                        </div>

                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55]  bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center  space-y-2 transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2015/04/whole-grain-vegan-raspberry-breakfast-bars-with-almonds-1200-368x368.jpg" alt="" />
                            <p className="font-bold text-2xl text-center">Raspberry Breakfast Bars</p>
                            <p className="text-center">Baked bars are filled with fresh raspberries, jam, and oats.</p>
                            <p className="font-bold text-xl text-green-800">$4.7</p>
                        </div>

                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55] bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center  space-y-2  transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2014/07/slice-coconut-custard-pie-1200-368x368.jpg" alt="" />
                            <p className="font-bold text-2xl">Coconut Custard Pie</p>
                            <p className="text-center"> Flaky crust topped with warm silky egg custard filling.</p>
                            <p className="font-bold text-xl text-green-800">$4.9</p>
                        </div>
                    </div>

                    <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55] bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center space-y-2 transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2014/05/rasberry-lemon-bars_landscape-368x368.jpg" alt="" />
                            <div className="text-center">
                            <p className="font-bold text-2xl">Luscious Raspberry</p>
                            <p>Delicious tangy raspberry lemon custard.</p>
                            <p className="font-bold text-xl text-green-800">$3.7</p>
                            </div>
                        </div>

                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55] bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center  space-y-2  transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2023/03/irish-brown-bread-16-1200-500x500.jpg" alt="" />
                            <div className="text-center">
                            <p className="font-bold text-2xl">Irish Brown Bread</p>
                            <p>Whole wheat flour with sweet and malted flavors..</p>
                            <p className="font-bold text-xl text-green-800">$6.7</p>
                            </div>
                        </div>

                        <div className="shadow-2xl hover:shadow-2xl hover:shadow-[#a97e55] bg-white border-8 border-black p-5 rounded-xl flex flex-col justify-center items-center  space-y-2 transition duration-300 hover:bg-[#ab9a8b] hover:text-white hover:font-semibold">
                            <img className="rounded-full h-72" src="https://www.jessicagavin.com/wp-content/uploads/2022/09/pumpkin-cream-cheese-muffins-29-1200-500x500.jpg" alt="" />
                            <div className="text-center">
                            <p className="font-bold text-2xl">Pumpkin Cream Cheese Muffins</p>
                            <p>Fresh pumpkin, bold spices, a creamy filling, and crunchy praline pepitas..</p>
                            <p className="font-bold text-xl text-green-800">$5.5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurBread