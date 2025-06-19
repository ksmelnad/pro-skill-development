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
import {
  createCommentSchema,
  type CreateCommentFormValues,
} from "@/lib/zodSchemas";
import { Loader2, Send } from "lucide-react";

interface CreateCommentFormProps {
  postId: string;
  onSubmit: (
    values: Omit<CreateCommentFormValues, "postId">
  ) => Promise<boolean>; // Returns true on success
}

export function CreateCommentForm({
  postId,
  onSubmit,
}: CreateCommentFormProps) {
  const form = useForm<Omit<CreateCommentFormValues, "postId">>({
    resolver: zodResolver(createCommentSchema.omit({ postId: true })),
    defaultValues: {
      content: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmit = async (
    values: Omit<CreateCommentFormValues, "postId">
  ) => {
    const success = await onSubmit(values);
    if (success) {
      form.reset(); // Reset form only on successful submission
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor={`commentContent-${postId}`}
                className="sr-only"
              >
                Your Comment
              </FormLabel>
              <FormControl>
                <Textarea
                  id={`commentContent-${postId}`}
                  placeholder="Write a comment..."
                  className="min-h-[60px] resize-y text-xs"
                  rows={2}
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
            size="sm"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-xs"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-1.5 h-3.5 w-3.5" />
                Submit
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
