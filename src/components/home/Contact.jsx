import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button-simple";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function Contact() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xgvyllnk");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind? Feel free to reach out and we can discuss how I can help bring your ideas to life.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    {typeof item.icon === 'string' ? (
                      <i className={`fa-solid fa-${item.icon} text-primary`}></i>
                    ) : (
                      <item.icon className="text-primary h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Follow me</h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="RSS Feed"
                >
                  <i className="fa-solid fa-rss"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    className="resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium p-3 rounded-lg transition-colors"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
