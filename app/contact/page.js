import Footer from "../_components/Footer";
import ContactPart from "./_components/ContactPart";
import info from "../_data/info.json";
import AnimatedLink from "../_components/AnimatedLink";

export const metadata = {
  title: "contact me",
};

export default function Contact() {
  return (
    <>
      <section className="container mx-auto overflow-x-hidden">
        <ContactPart />

        <div className="flex py-20 flex-col items-end">
          <div className="flex justify-end flex-col items-start space-y-4">
            <div className="flex justify-end flex-col items-start">
              <span className="text-xs">Follow me : </span>
              <ul className="flex gap-4">
                {info.social.slice(1, 4).map((item, index) => (
                  <li key={index}>
                    <AnimatedLink href={item.path} target="_blank">
                      {item.name}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs">Email : </span>
              <p>{info.email}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer nextPage="/" prevPage="projects" />
    </>
  );
}
