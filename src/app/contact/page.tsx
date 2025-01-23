import ContactForm from "components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="pt-10 md:pt-16 pb-5 md:pb-10 container px-3">
        <h2 className="text-center mb-5 text-tealSolid-200">Contact Us</h2>
        <ContactForm />
      </section>
    </main>
  );
}
