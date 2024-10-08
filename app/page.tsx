import Image from "next/image";

const images = [
  {
    src: "https://wowlife.club/images/banners/category/den-rozhdeniya.jpg",
    comment: "",
  },
  {
    src: "https://wowlife-crm.ru/upload/iblock/255/sv29g00fq0e870omdicmh55cllruvqwh/adrenaline-motocross-rider-in-action-2022-09-29-20-31-08-utc.jpg",
    comment: "",
  },
  {
    src: "https://msk.wowlife.club/_next/image/?url=%2Fimages%2Fakcia-4.jpeg&w=828&q=100",
    comment: "",
  },
  {
    src: "http://static.kremlin.ru/media/events/photos/medium/kSgH0dqfDDsDZf4t0dBARhBG5BW1EKl2.jpg",
    comment: "",
  },
  {
    src: "https://wowlife-crm.ru/upload/iblock/bf3/a1mmapopt5jf1lgvhvwo92y44t9ztsdq/minimalist-image-of-colorful-hot-air-balloon-again-2022-11-07-07-22-51-utc.jpg",
    comment: "",
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-2 gap-5 w-full h-screen p-10">
        {images.map((img, i) => (
          <div key={i} className="relative">
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src={img.src}
              alt=""
              fill
            />
            <div className="absolute left-5 right-5 bottom-5 text-lg text-black bg-white p-5 rounded-lg">
              {img.src + " " + img.comment}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
