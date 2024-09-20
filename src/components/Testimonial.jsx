import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial_img from '../assets/images/Testimonial.jpg';
import testimonial_logo from '../assets/images/testimoinal_logo.jpg';

export default function Testimonial() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">TESTIMONIAL</h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Customer is Our Top Priority
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We survey all of our clients, the results of which go directly to our CEO.
          </p>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <div className="relative">
            <div className="overflow-hidden rounded-lg border bg-background shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial_logo}
                      alt="Gymstory logo"
                      className="rounded-full"
                      height={40}
                      width={40}
                    />
                    <h3 className="text-2xl font-bold">Gymstory</h3>
                  </div>
                  <h4 className="text-xl font-semibold">Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    I recently hired Ideapeel for a custom web development project and couldn&apos;t be happier with the results. The team
                    was able to bring my unique ideas to life and create a website that truly stands out.
                  </p>
                  <div>
                    <h5 className="font-semibold">Diana Loreza</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Director of GYMSTORY</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={testimonial_img}
                    alt="Testimonial giver"
                    className="rounded-full"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-background p-2 rounded-full shadow-lg">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-background p-2 rounded-full shadow-lg">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}