export const CoursesandCertificates = () => {
  return (
    <section id="courses" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Courses & Certificates</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
         href="https://www.udemy.com/certificate/UC-ed2c3cff-66ce-4f59-a0a2-1ccd992421fa/"
         target="_blank"
         rel="noopener noreferrer"
         className="gradient-border p-6 card-hover block"
        >
        <h4 className="font-semibold text-lg">
         Figma 2023 Bootcamp: UI/UX Design, Prototyping, Dashboards
        </h4>
        <p className="text-muted-foreground">
         Completed Figma bootcamp to master UI/UX design, prototyping, and dashboards.
        </p>
       </a>


        <a
  href={`${import.meta.env.BASE_URL}Coursera-ai-certificate.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="gradient-border p-6 card-hover block"
>
  <h4 className="font-semibold text-lg">
    Coursera: Google AI Essentials
  </h4>
  <p className="text-muted-foreground">
    Certificate demonstrating foundational knowledge in AI essentials from Google.
  </p>
</a>


          <a
            href={`${import.meta.env.BASE_URL}POSTMAN API NITK CERTIFICATE.jpeg`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border p-6 card-hover block"
          >
            <h4 className="font-semibold text-lg">
              NITK Surathkal: Postman Classroom Program
            </h4>
            <p className="text-muted-foreground">
              Certificate completed for API testing and collaboration using Postman.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
