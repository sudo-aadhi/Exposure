import Body from "./components/mains/Body";
import Header from "./components/mains/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[6000px] bg-black">
      <Header />
      <Body />
    </div>
  );
}
