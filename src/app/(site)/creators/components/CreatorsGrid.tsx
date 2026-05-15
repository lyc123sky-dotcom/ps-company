import Image from "next/image";

const photos = [
  "IMG_0961.PNG",
  "IMG_0962.PNG",
  "IMG_0964.PNG",
  "IMG_0965.PNG",
  "IMG_0966.PNG",
  "IMG_0967.PNG",
  "IMG_0969.PNG",
  "IMG_0973.PNG",
  "IMG_0975.PNG",
  "IMG_0976.PNG",
];

export default function CreatorsGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div
          className="grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          role="list"
        >
          {photos.map((file, i) => (
            <div
              key={file}
              role="listitem"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#fafafa] border border-[#ededed] hover:border-[#ff1493] hover:shadow-[0_8px_24px_rgba(255,20,147,0.12)] transition"
            >
              <Image
                src={`/images/creators/${file}`}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
