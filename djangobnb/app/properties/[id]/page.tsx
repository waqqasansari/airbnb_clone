import Image from "next/image";
import ResevationSidebar from "@/app/components/Properties/ReservationSidebar";

const PropertyDetailsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/logo/beach2.webp"
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/pics/profile-pic.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />
            <p>
              <strong>Jhon Doe</strong> is your host
            </p>

            <hr />
            <p className="mt-6 text-lg">
              alsg;lasgpwrhgpialsfgn;labnjlnoh oah gnal;fg ag og
              algh;ldfhglkjahsfgoiuahrgn
            </p>
          </div>
        </div>
        <ResevationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
