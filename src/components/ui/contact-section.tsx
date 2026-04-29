"use client"

import { useCallback, useState } from "react"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitMessage = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const subject = encodeURIComponent("Message from socaenergy.com")
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      )
      window.location.href = `mailto:sales@socaenergy.com?subject=${subject}&body=${body}`
    },
    [name, email, message],
  )

  return (
    <section
      id="contact"
      className="border-t border-border bg-muted/30 px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="contact-heading"
          className="font-kanturmuy text-3xl font-normal tracking-tight text-foreground md:text-4xl"
        >
          Contact Information
        </h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="min-w-0 space-y-10">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Have questions or did not find what you were looking for? You may
                contact SCEA directly using the information below, or send SCEA a
                message through our{" "}
                <a
                  href="#contact-form"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  contact form
                </a>
                .
              </p>
              <p className="text-foreground">Thanks.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">
                Contact SCEA for Solar
              </h3>
              <address className="not-italic text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>45350 San Luis Rey</p>
                <p>Palm Desert, CA 92260</p>
              </address>
              <dl className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-foreground">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+17609044917"
                      className="underline-offset-4 hover:text-foreground hover:underline"
                    >
                      +1 760 904 4917
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-foreground">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:sales@socaenergy.com"
                      className="underline-offset-4 hover:text-foreground hover:underline"
                    >
                      Sales@socaenergy.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-foreground">
                    Hours
                  </dt>
                  <dd className="mt-1">
                    <ul className="space-y-1">
                      <li>Mon–Fri: 8:00 until 17:00</li>
                      <li>Sat: 10:00 until 16:00</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div
            id="contact-form"
            className="scroll-mt-24 rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8 lg:max-h-min lg:self-start"
          >
            <h3 className="font-kanturmuy text-2xl font-normal tracking-tight text-foreground md:text-3xl">
              Send a message
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              Fill in the form below. Your email app will open so you can send the
              message to SCEA.
            </p>
            <form
              onSubmit={submitMessage}
              className="mt-8 space-y-5"
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-muted/20 px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-lg border border-border bg-muted/20 px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Open email to send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
