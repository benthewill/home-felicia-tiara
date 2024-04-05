export const runtime = "edge";

import ParallaxHome from "@/components/ParallaxHome";

// export const dynamic = "force-dynamic"; // not sure if required

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-2 pt-24 md:pt-12 md:p-12">
      <ParallaxHome />
    </main>
  );
}
