import Appointment from "./Appointment";
import BigServices from "./BigServices";

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-900">

      {/* 🔥 Animated Background */}
  <img
  src="/images/service-shape-1.png"
  className="absolute inset-0 w-full h-full object-cover animate-zoomInOut opacity-60 pointer-events-none"
/>

      <div className="relative z-10">

        {/* Appointment */}
        <div className="py-20">
          <Appointment />
        </div>

        {/* Big Services */}
        <div className="py-20">
          <BigServices />
        </div>

      </div>

    </section>
  );
};

export default ServicesSection;