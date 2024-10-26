import OneGoal from "../OneGoal/OneGoal"


const FreshBakes = () => {
    return (
        <>
            <section className="py-5 bg-white">
                <div className="2xl:container mx-auto">
                    <div className="w-[90%] mx-auto grid grid-cols-1 py-8">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-5xl font-bold text-center">We bake fresh, handmade bread, pastries and cakes every day</p>
                        </div>
                    </div>

                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-10 gap-7">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <img src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/FreshDaily.png" alt="" />
                            <p className="text-2xl font-semibold">Baked Fresh Daily</p>
                            <p className="text-lg font-medium">Our bread is baked fresh daily, contains no preservatives and is very
                                high in quality. It is also especially nice and soft</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-3">
                            <img src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/GreatValue.png" alt="" />
                            <p className="text-2xl font-semibold">Great Value</p>
                            <p className="text-lg font-medium">With the most competitive prices on the market we are 
                                able to deliver great value without compromising on taste</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-3">
                            <img src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/Institute.png" alt="" />
                            <p className="text-2xl font-semibold">Institutions</p>
                            <p className="text-lg font-medium">We serve a wide range of institutions including 
                                universities, airlines, hotels and schools. Order daily for tomorrow</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-3">
                            <img src="https://ik.imagekit.io/pvrlbjuaj/MERN%20stack/Delivery.png" alt="" />
                            <p className="text-2xl font-semibold">Delivery To Your Door</p>
                            <p className="text-lg font-medium">Our bakery courier service incorporates efficient delivery routes, trained drivers, and a real-time tracking system.</p>
                        </div>
                    </div>
                </div>
            </section>

            <OneGoal/>
        </>
    )
}

export default FreshBakes