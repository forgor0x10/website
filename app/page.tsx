import Image from "next/image";

import { AmenBreakButton, Mewo } from "./components";

export default function Home() {
  return (
    <main>
      <div className="content flex mx-auto gap-8">
        <div className="flex flex-col flex-1/2 gap-8 w-0">
          <div className="card">
            <Mewo></Mewo>

            <h1>Hi</h1>

            <p className="pb-4">
              This is my epic awesome website (Kinda. Can&apos;t bother to buy a
              proper domain)
            </p>

            <p className="pb-4">
              The first version of the website was released on December 7th 2024
              <br />
              The next version (Similar to this) was released on July 5th 2025
              <br />
              The website was then rewritten in Next.js on July 10th 2025
            </p>

            <p>
              I&apos;m a russian un*mployed software and game developer
              <br />
              I also make (bad) music and (bad) art
              <br />
              Still in school
            </p>
          </div>

          <div className="card">
            <h1>Games (Yay!!)</h1>

            <ul>
              <li>
                <h2>
                  <a target="_blank" href="https://forgor0x10.itch.io/vistake">
                    VISTAKE
                  </a>
                </h2>

                <p>
                  My very own rpg game!! It&apos;s really story heavy to a point
                  it would be better to just write a book, but books don&apos;t
                  have their own art and soundtrack (mostly) so games are still
                  better
                  <br />
                  I&apos;m still making it and I&apos;m far from finishing.
                  There is a free demo tho (see game links)
                </p>
              </li>

              <li>
                <h2>
                  <a target="_blank" href="https://forgor0x10.itch.io/arhgpg">
                    A.R.H.G.P.G.
                  </a>
                </h2>

                <p>
                  Not much to talk about this one. My first game to actually
                  release, nothing more than a really hard generic platformer
                  game (ha get it)
                </p>
              </li>
            </ul>
          </div>

          <div className="marquee">
            <div>
              <h2>Hi Shark!!</h2>
              <h2>Hi Arbuz!!</h2>
              <h2>Hi Flexx!!</h2>
              <h2>Hi Tazik!!</h2>
              <h2>Hi Bao!!</h2>
              <h2>Hi Yuko!!</h2>
              <h2>Hi Kam!!</h2>
              <h2>Hi Shvabrik!!</h2>
              <h2>Hi Unkver!!</h2>
            </div>
          </div>

          <div className="card">
            <h1>Amen break roulette</h1>

            <p>Press the button below to get one of 20 random amen breaks</p>
            <AmenBreakButton />
          </div>
        </div>

        <div className="flex flex-col flex-1/8 gap-8 w-0">
          <div className="card">
            <h1>Project links</h1>

            <p>sOrg</p>

            <ul>
              <li>
                <a target="_blank" href="https://sOrg-org.github.io/">
                  Website
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org">
                  Main page
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sCore">
                  sCore
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sSML">
                  sSML
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sMarkup">
                  sMarkup
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sCSH">
                  sCSH
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/sOrg-org/sColScheme"
                >
                  sColScheme
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sWelcomer">
                  sWelcomer
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/sOrg-org/sConfig">
                  sConfig
                </a>
              </li>
            </ul>

            <p>Other</p>

            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/forgor0x10/forgor0x10.github.io"
                >
                  forgor0x10.github.io
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/forgor0x10/peaklang"
                >
                  peaklang
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/forgor0x10/scrrain">
                  scrrain
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h1>Game links</h1>

            <ul>
              <li>
                <a target="_blank" href="https://forgor0x10.itch.io/vistake">
                  VISTAKE
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://forgor0x10.itch.io/vistake-demo"
                >
                  VISTAKE (Free demo)
                </a>
              </li>
              <li>
                <a target="_blank" href="https://forgor0x10.itch.io/arhgpg">
                  A.R.H.G.P.G.
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="flex flex-col items-center">
              <h1>/img/bobam.gif</h1>
              <div className="w-3/4 relative aspect-[249/230]">
                <Image
                  className="rounded-lg"
                  src="/img/bobam.gif"
                  alt="bobam.gif"
                  fill
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
