/* eslint-disable @next/next/no-img-element */

function AboutSection() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/about-image.gif"
          alt="about image"
          className="rounded-lg"
          width={500}
          height={500}
          loading="lazy"
        />
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at
            rerum vero, culpa in recusandae obcaecati tenetur optio fuga
            inventore iste dolores excepturi officia atque ipsa fugit animi
            velit voluptas eveniet tempore facere molestiae modi nemo? Culpa,
            porro cupiditate! Nesciunt voluptate nobis libero veritatis eum
            magnam dolorem minima fugit porro.s
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
