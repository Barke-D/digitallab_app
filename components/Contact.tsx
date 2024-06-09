"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { contactSchema } from "@/lib/validations";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import useContactForm from "@/lib/hooks/useContactForm";
import sendEmail from "@/lib/actions";
import { Loader, LoaderCircle } from "lucide-react";

const Contact = () => {
  const [isLoading, setisLoading] = useState(false);
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>, e: any) {
    e.preventDefault();
    try {
      const req = await sendEmail(values.name, values.email, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  }

  return (
    <section
      id="#contact"
      className="md:w-[700px] w-full flex flex-col items-center justify-center mt-14 p-6 bg-white shadow-lg"
    >
      <div className="w-full flex items-center justify-center ">
        <h1 className="font-bold text-2xl text-center py-4 font-inter uppercase">
          Contact Us
        </h1>
      </div>
      <div className="w-full items-center justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={(field) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className="border-slate-400 outline-sky-500 font-inter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-inter" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={(field) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your Email Address"
                      className="border-slate-400 outline-sky-500 font-inter"
                    />
                  </FormControl>
                  <FormMessage className="font-inter" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={(field) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your Message"
                      className="border-slate-400 outline-sky-500 font-inter"
                    />
                  </FormControl>
                  <FormMessage className="font-inter" />
                </FormItem>
              )}
            />
            <div className="font-inter">
              <Button
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white font-bold leading-1 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <LoaderCircle className="animate-spin" />
                    <p>Sending Message</p>
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
