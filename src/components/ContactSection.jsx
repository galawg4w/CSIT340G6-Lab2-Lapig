import ContactLink from './ContactLink'
import SectionHeading from './SectionHeading'

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:lawrenceisaac.lapig@cit.edu"
          text="lawrenceisaac.lapig@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/galawg4w"
          text="github.com/galawg4w"
        />
        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/juandelacruz"
          text="linkedin.com/in/lawrence-lapig-9888913b8"
        />
      </ul>
    </section>
  )
}

export default ContactSection
