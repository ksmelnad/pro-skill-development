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
import { Textarea } from "@/components/ui/textarea";
import { createPostSchema, type CreatePostFormValues } from "@/lib/zodSchemas";
import { Loader2, Send } from "lucide-react";

interface CreatePostFormProps {
  threadId: string; // Passed explicitly to avoid issues if thread data is not yet loaded
  onSubmit: (
    values: Omit<CreatePostFormValues, "threadId">
  ) => Promise<boolean>; // Returns true on success
}

export function CreatePostForm({ threadId, onSubmit }: CreatePostFormProps) {
  const form = useForm<Omit<CreatePostFormValues, "threadId">>({
    // Omit threadId as it's passed directly
    resolver: zodResolver(createPostSchema.omit({ threadId: true })), // Validate without threadId
    defaultValues: {
      content: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit = async (
    values: Omit<CreatePostFormValues, "threadId">
  ) => {
    const success = await onSubmit(values);
    if (success) {
      form.reset(); // Reset form only on successful submission
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="postContent" className="sr-only">
                Your Reply
              </FormLabel>
              <FormControl>
                <Textarea
                  id="postContent"
                  placeholder="Write your reply here..."
                  className="min-h-[120px] resize-y text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting Reply...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Post Reply
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
