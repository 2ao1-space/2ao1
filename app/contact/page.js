import ContactPart from "./_components/ContactPart";

export const metadata = {
  title: "contact me",
};

export default function Contact() {
  return (
    <>
      <section className="h-screen container mx-auto">
        <ContactPart />
      </section>
    </>
  );
}
