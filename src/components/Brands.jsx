const brands = [
  "/images/brand-img.png",
  "/images/brand-img2.png",
  "/images/brand-img3.png",
  "/images/brand-img4.png",
  "/images/brand-img5.png",
];

const Brands = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">

        <div className="flex flex-wrap justify-center items-center gap-12">
          {brands.map((img, i) => (
            <img key={i} src={img} className="h-10" alt="" />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;