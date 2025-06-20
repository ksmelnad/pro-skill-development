"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  createThreadSchema,
  type CreateThreadFormValues,
} from "@/lib/zodSchemas";
import { Loader2, Send } from "lucide-react";

interface CreateThreadFormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: (values: CreateThreadFormValues) => Promise<boolean>; // Returns true on success
}

export function CreateThreadForm({
  isOpen,
  onOpenChange,
  onSubmit,
}: CreateThreadFormProps) {
  const form = useForm<CreateThreadFormValues>({
    resolver: zodResolver(createThreadSchema),
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit = async (values: CreateThreadFormValues) => {
    // console.log("Form values:", values);
    // console.log("Form errors:", form.formState.errors);
    const success = await onSubmit(values);
    if (success) {
      form.reset(); // Reset form only on successful submission
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">
            Create New Forum Thread
          </DialogTitle>
          <DialogDescription>
            Start a new discussion. Provide a clear title and a detailed
            description for your topic.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 py-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Thread Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a concise and descriptive title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    Thread Content / Initial Post
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Explain your topic, ask your question, or start the discussion here..."
                      className="min-h-[200px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Post Thread
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
