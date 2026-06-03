import { useState } from 'react';
import { Send, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishansrivastava2805@gmail.com",
      href: "mailto:ishansrivastava2805@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7579986480",
      href: "tel:+917579986480"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "IshanAmrit28",
      href: "https://github.com/IshanAmrit28"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "naruto404",
      href: "https://www.linkedin.com/in/naruto404"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and development. Feel free to reach out through any of these platforms!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon === Mail || info.icon === Phone ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col items-center sm:items-start gap-4 p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border border-border/50 relative overflow-hidden">
            {/* Decorative background glow for form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-background/50 border-border/50 focus:border-primary/50 transition-colors py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-background/50 border-border/50 focus:border-primary/50 transition-colors py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className="w-full resize-none bg-background/50 border-border/50 focus:border-primary/50 transition-colors p-4 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 hover:shadow-glow transition-all duration-300 text-primary-foreground rounded-xl py-6 text-lg font-semibold mt-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;