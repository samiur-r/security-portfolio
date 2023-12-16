import SectionHeader from "@/components/SectionHeader";
import TestimonialSlider from "@/components/TestimonialSlider";

const testimonialsData = [
  {
    id: 1,
    imageUrl: "testimonial-person-1.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization.",
    name: "John Wilson",
    title: "Chief Executive Officer, Harvard University",
  },
  {
    id: 2,
    imageUrl: "testimonial-company-1.svg",
    text: "I can't emphasize enough the peace of mind and confidence that investing in robust cybersecurity measures has brought to our organization. 2",
    name: "John Wilson 2",
    title: "Chief Executive Officer, Harvard University 2",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="container lg:mx-auto px-5 lg:px-0 mb-4 lg:mb-16">
        <SectionHeader
          subHeadline="REAL STORIES, REAL results"
          headline="Discover the Secrets to Client Success"
        />
      </div>
      <div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
};

export default Testimonials;
