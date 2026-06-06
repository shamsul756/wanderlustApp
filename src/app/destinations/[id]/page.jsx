

import { EditModal } from "@/Components/EditModal";
import Image from "next/image";

import {
    FaMapMarkerAlt,
    FaTag,
    FaClock,
    FaDollarSign,
    FaPlane,
} from "react-icons/fa";

const DestinationDetails = async ({ params }) => {
    const { id } = await params;

console.log("ID:", id);

const res = await fetch(
  `http://localhost:8000/destinations/${id}`,
  { cache: "no-store" }
);

console.log("Status:", res.status);

const destination = await res.json();



if (!destination) {
  return (
    <div className="text-center mt-10">
      Destination not found
    </div>
  );
}

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            

               <EditModal destination={destination}/>   

                
            {/* Hero Section */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                    src={destination.imageUrl}
                    alt={
destination.destinationName}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {
destination.destinationName}
                    </h1>

                    <div className="flex items-center gap-2 text-white mt-3">
                        <FaMapMarkerAlt />
                        <span>{destination.country}</span>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {/* Left Content */}
                <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">
                        Destination Details
                    </h2>

                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <FaTag className="text-blue-500 text-xl" />
                            <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-semibold">{destination.category}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaClock className="text-green-500 text-xl" />
                            <div>
                                <p className="text-gray-500">Duration</p>
                                <p className="font-semibold">{destination.duration}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-red-500 text-xl" />
                            <div>
                                <p className="text-gray-500">Country</p>
                                <p className="font-semibold">{destination.country}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">
                            About This Trip
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Experience the beauty of {destination.destinationName} in{" "}
                            {destination.country}. This {destination.category.toLowerCase()} package
                            offers an unforgettable journey with amazing
                            attractions, local culture, and memorable
                            experiences. Perfect for travelers looking for a
                            unique adventure.
                        </p>
                    </div>
                </div>

                {/* Booking Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg h-fit sticky top-10">
                    <div className="text-center">
                        <FaPlane className="mx-auto text-4xl text-blue-500 mb-4" />

                        <h3 className="text-3xl font-bold text-blue-600">
                            ${destination.price}
                        </h3>

                        <p className="text-gray-500 mt-1">
                            Per Person
                        </p>
                    </div>

                    <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                        Book Now
                    </button>

                    <button className="w-full mt-3 border border-blue-500 text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;