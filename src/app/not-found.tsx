import Image from "next/image";
import NotFoundImage from "assets/not-found.svg";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col space-y-2 bg-blue-800 justify-center items-center p-4">
      <h2 className="text-errorSolid-50 font-bold text-xl">Page Not Found</h2>
      <Image src={NotFoundImage} alt="page not found image" priority />
    </main>
  );
}
