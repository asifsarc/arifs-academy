import { assets } from "../../assets/assets";

const Companies = () => {
    return (
        <div className="pt-16">
            <p className="textbase text-gray-500">Trusted By learner from</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
                <img src={assets.microsoft_logo} alt="mircosoft" className="w-20 md:w-28" />
                <img src={assets.walmart_logo} alt="mircosoft" className="w-20 md:w-28" />
                <img src={assets.accenture_logo} alt="mircosoft" className="w-20 md:w-28" />
                <img src={assets.adobe_logo} alt="mircosoft" className="w-20 md:w-28" />
                <img src={assets.paypal_logo} alt="mircosoft" className="w-20 md:w-28" />
            </div>
        </div>
    );
};

export default Companies;