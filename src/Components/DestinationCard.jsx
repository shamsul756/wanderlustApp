import Image from "next/image";
import Link from "next/link";
import {
    FaMapMarkerAlt,
    FaTag,
    FaClock,
    FaDollarSign,
} from "react-icons/fa";

const DestinationCard= ({ destination }) => {
    // const {
    //     _id,
    //     destinationName,
    //     country,
    //     category,
    //     price,
    //     duration,
    //     imageUrl,
    // } = destination;
    // console.log(destination);

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border">
            <div className="relative">
                <Image
                    src={destination.imageUrl}
                   alt={destination.price}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover"
                />

                <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${destination.price}
                </span>
            </div>

            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                    
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{destination.country}</span>
                </div>

                <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                        <FaTag className="text-blue-500" />
                        <span>
                            <strong>Category:</strong> {destination.category}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaClock className="text-green-500" />
                        <span>
                            <strong>Duration:</strong> {destination.duration}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaDollarSign className="text-yellow-500" />
                        <span className="font-semibold text-lg text-blue-600">
                            {destination.price}
                        </span>
                    </div>
                </div>
                 <Link href={`/destinations/${destination._id}`}>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
                    Book Now
               
                </button>
                </Link>
            </div>

        </div>
    );
};

export default DestinationCard;