import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { InternHub } from "./components/InternHub";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <Hero />
      <About />
      <Projects />
      <InternHub />
      <Contact />
    </div>
  );
}
