"use client";

import { usePathname } from "next/navigation";

export default function usePathLastSegment() {
  const pathName = usePathname();
  const segments = pathName.split("/");
  const pathLastSegment = segments.pop();
  return pathLastSegment;
}
