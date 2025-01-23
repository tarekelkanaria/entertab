import Image from "next/image";
import Loading from "assets/loading.svg";

export default function loading() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      <Image
        src={Loading}
        alt="Loader icon"
        placeholder="blur"
        blurDataURL="/assets/loading.svg"
      />
    </main>
  );
}
