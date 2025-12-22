import About from "./components/About";
import Info from "./components/Info";
import Skill from "./components/Skill";
import Works from "./components/Works";


export default function Home() {
  return (
    <main className="flex max-w-xl w-full flex-col gap-10 p-4 py-20">
      <Info />
			<About />
			<Skill />
			<Works />
    </main>
  );
}
