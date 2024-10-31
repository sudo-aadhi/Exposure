import Background from "./components/essentials/Background";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[5000px] bg-gradient-to-b from-[#030113] to-black">
      <Background>
        <Hero />
      </Background>
    </div>
  );
}
