import Image from "next/image";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="icon" href="data:image/x-icon;base64," type="image/x-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className="font-display bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
        {/* Animated bouncing element */}
        <div className="absolute w-48 h-48 bg-primary rounded-lg animate-bounce-dvd opacity-60" />

        <div className="flex flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl z-10">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
                Code Together, Anywhere
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                Collaborate in real-time with your team on any project, from
                anywhere in the world. Our online IDE supports a wide range of
                programming languages, making it the perfect platform for your
                next big idea.
              </p>
            </div>

            {/* Supported Languages */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
                Take your Pick!
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {[
                  { icon: "python-plain", name: "Python" },
                  { icon: "javascript-plain", name: "JavaScript" },
                  { icon: "java-plain", name: "Java" },
                  { icon: "cplusplus-plain", name: "C++" },
                  { icon: "ruby-plain", name: "Ruby" },
                  { icon: "go-original-wordmark", name: "Go" },
                  { icon: "swift-plain", name: "Swift" },
                  { icon: "php-plain", name: "PHP" },
                  { icon: "csharp-plain", name: "C#" },
                  { icon: "kotlin-plain", name: "Kotlin" },
                  { icon: "rust-plain", name: "Rust" },
                  { icon: "typescript-plain", name: "TypeScript" },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <i
                      className={`devicon-${lang.icon} text-4xl text-zinc-700 dark:text-zinc-300`}
                    ></i>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                      {lang.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <button className="inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-8 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:ring-offset-background-dark">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
