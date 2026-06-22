"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question about an order, our products, or just want to say hi? 
          We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-black uppercase border-b border-border pb-4">Get in Touch</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3 p-6 bg-secondary/20 border border-border rounded-sm">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Phone Support</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 p-6 bg-secondary/20 border border-border rounded-sm">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Email Us</h3>
                <p className="text-muted-foreground">support@bavaslifestyle.com</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 p-6 bg-secondary/20 border border-border rounded-sm">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Business Hours</h3>
                <p className="text-muted-foreground">Mon - Sat: 9AM - 8PM<br/>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 p-6 bg-secondary/20 border border-border rounded-sm">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Head Office</h3>
                <p className="text-muted-foreground">123 Fashion Street, Cyber City, Bangalore, 560001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-border p-8 rounded-sm shadow-xl">
          <h2 className="text-2xl font-black uppercase mb-6">Send a Message</h2>
          
          {isSent ? (
            <div className="flex flex-col items-center justify-center text-center py-12 h-full">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold uppercase mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-8">Thanks for reaching out. We will get back to you shortly.</p>
              <Button onClick={() => setIsSent(false)} variant="outline" className="font-bold uppercase tracking-widest">
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Full Name</label>
                  <input required type="text" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Email Address</label>
                  <input required type="email" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Order Number (Optional)</label>
                <input type="text" className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g. BVS-123456" />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">Message</label>
                <textarea required rows={5} className="w-full bg-secondary/30 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="How can we help you?"></textarea>
              </div>

              <Button type="submit" disabled={isProcessing} className="w-full h-12 font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-md flex items-center justify-center gap-2">
                {isProcessing ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
