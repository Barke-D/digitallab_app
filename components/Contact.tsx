"use client";

import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { contactSchema } from "@/lib/validations";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import sendEmail from "@/lib/actions";
import { Loader, LoaderCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [isLoading, setisLoading] = useState(false);

  const [state, handleSubmit] = useForm("mbjnnrev");

  return (
    <section
      id="#contact"
      className="md:w-[700px] w-full flex flex-col items-center justify-center mt-28 p-6 bg-white shadow-lg"
    >
      <div className="w-full flex items-center justify-center ">
        <h1 className="font-bold text-2xl text-center py-4 font-inter uppercase">
          Contact Us
        </h1>
      </div>
      <div className="w-full items-center justify-center">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <Input
              type="text"
              placeholder="Enter your name"
              className="border-slate-400 outline-sky-500 font-inter"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Enter your Email Address"
              className="border-slate-400 outline-sky-500 font-inter"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <Textarea
              placeholder="Enter your Message"
              className="border-slate-400 outline-sky-500 font-inter"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="font-inter">
            <Button
              type="submit"
              className="bg-blue-500 text-white font-bold leading-1 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoaderCircle className="animate-spin" />
                  <p>Sending</p>
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
