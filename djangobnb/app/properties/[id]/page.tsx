import Image from "next/image";

const PropertyDetailsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/logo/beach2.webp"
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4"></div>
        </div>
        <div>right side</div>
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
