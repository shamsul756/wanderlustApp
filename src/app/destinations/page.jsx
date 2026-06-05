import DestinationCard from "@/Components/DestinationCard";


const DestinationPage = async () => {
    const res = await fetch("http://localhost:8000/destinations");
    const destinations = await res.json();
    console.log(destinations, "this data come form destination");
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">
                All Destinations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                    <DestinationCard
                        key={destination._id}
                        destination={destination}
                    />
                ))}
            </div>
        </div>
    );
};

export default DestinationPage;