import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MapComponents from "./MapComponents";

export default function Navbar() {
  return (
    <main className="flex flex-col gap-4">
      <div className="w-full border p-4 rounded bg-zinc-100 dark:bg-zinc-900">
        <div className="flex gap-3 border-b pb-4">
          <div className="w-[15rem] flex items-center space-x-2">
            <Button variant="outline" className="w-full">
              Download CV
            </Button>
          </div>
          <ModeToggle />
        </div>
        <div className="py-4">
          <h1 className="text-xl font-bold">Social Media</h1>
          <div className="flex flex-col py-2 gap-2">
            <span className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaXTwitter className="text-xl" />
              </Button>
              <a href="https://twitter.com/ilybutnotmine" target="_blank">
                @ilybutnotmine
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaInstagram className="text-xl" />
              </Button>
              <a
                href="https://www.instagram.com/flqks.1001/?next=%2F"
                target="_blank"
              >
                @flqks.1001
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaGithub className="text-xl" />
              </Button>
              <a href="https://github.com/rdpratama" target="_blank">
                @rdpratama
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border p-4 rounded bg-zinc-100 dark:bg-zinc-900">
        <div className="flex flex-col gap-3 pb-4">
          <div className="w-[15rem] flex items-center space-x-2">
            <h4 className="text-xl font-bold">Maps</h4>
          </div>
          <div>{/* <MapComponents /> */}</div>
        </div>
      </div>
    </main>
  );
}
