"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-4">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full gradient-bg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>You can also reach me directly using the following contact details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+998-97-199-97-73</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:sultonbayevogabek@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sultonbayevogabek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Send className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telegram</h3>
                    <a
                      href="https://t.me/sultonbayevogabek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @sultonbayevogabek
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com/sultonbayevogabek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sultonbayevogabek
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Whether you're a business looking to create a new website, a developer looking for collaboration, or
                  just want to say hi, I'd love to hear from you!
                </p>
                <p className="text-muted-foreground">I typically respond within 24 hours during weekdays.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
