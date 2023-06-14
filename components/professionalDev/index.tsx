const ProfessionalDevelopment = () => {
    return (
        <div className="m-10 font-montserrat">
            <h1 className="text-4xl font-bold text-white">Professional Development</h1>
            <div className="w-full h-0.5 bg-linecolor"></div>
            <div>
                <div className="flex gap-5 md:gap-1 mt-5 md:mt-10">
                    <h1 className="font-bold text-sm md:text-2xl">Astera Data Bootcamp (2022)</h1>
                </div>
                <div className="text-secondaryText">
                    <h1 className="font-bold text-sm md:text-l "> Data cleaning, sorting, workflow creation</h1>
                </div>
            </div>
            <div>
                <div className="flex gap-5 md:gap-1 mt-5 md:mt-10">
                    <h1 className="font-bold text-sm md:text-2xl">Nvidia Deep Learning Workshop (2022)</h1>
                </div>
                <div className="text-secondaryText">
                    <h1 className="font-bold text-sm md:text-l ">Tensorflow 2 with Keras, Pandas, layering concepts</h1>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalDevelopment;
