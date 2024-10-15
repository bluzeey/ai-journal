import React from "react"

const tutorials = [
  {
    id: 1,
    videoSrc:
      "https://www.loom.com/embed/be463c0fb0a24eb1a4f6b17afeed48a9?sid=29ec738b-0db4-498b-b576-1d5e1e14da27",
  },
  {
    id: 2,
    videoSrc:
      "https://www.loom.com/embed/544d0276005b4f1ebe9bd7407e05d1ea?sid=1ed38f02-a99a-4594-b216-5fdfd2fc5fd7",
  },
]

const Tutorial: React.FC = () => {
  return (
    <div className="mx-10 max-w-5xl md:w-2/3">
      <div className="flex w-full max-w-7xl flex-col p-6 pb-12">
        <div className="px-6 py-8 text-center lg:px-8">
          <h4 className="text-xl uppercase text-primary sm:text-2xl">
            Explore Our Tutorials
          </h4>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Tutorials and Walkthroughs
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="flex flex-col items-center">
              <div
                className="relative w-full"
                style={{ paddingBottom: "64.67%", height: 0 }}
              >
                <iframe
                  src={tutorial.videoSrc}
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tutorial
