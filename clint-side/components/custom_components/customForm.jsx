"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useZodFormValidation } from "@/utils/formSchima";
import { User } from "lucide-react";

const CustomForm = ({ handleFormSubmit,schema, initialValues, inputData = [], btnText }) => {
  const { form } = useZodFormValidation(schema, initialValues);
  
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-5 mt-8"
        >
          {inputData.map((inputs, index) => (
            <FormField
              key={inputs.name}
              control={form.control}
              name={inputs.name}
              render={({ field }) => (
                <FormItem className="text-start">
                  {/* <FormLabel className="capitalize">{inputs.name}</FormLabel> */}
                  <FormControl>
                    <div className="flex items-center">
                      <span className="bg-background rounded-s-full rounded-e-2xl h-12 flex justify-center items-center p-2 w-14">
                        {inputs.icon}
                      </span>
                      <Input
                        type={inputs.type}
                        className="bg-background autofill:bg-background py-6 text-white border-0 rounded-s-2xl rounded-e-full focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-0"
                        placeholder={inputs.placeholder}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  {/* <FormDescription>
                    {form.formState.errors}
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-3/4 bg-violet-800">{btnText}</Button>
        </form>
      </Form>
    </div>
  );
};

export default CustomForm;
