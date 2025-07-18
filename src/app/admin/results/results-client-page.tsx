"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DateRangePicker from "@/components/date-picker/date-range-picker";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultsClientPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedTopic, setSelectedTopic] = useState(
    searchParams.get("quizTopic") || ""
  );

  const { data: topicsData } = useSWR("/api/admin/quiz-filters", fetcher);
  const { data: titlesData } = useSWR(
    selectedTopic ? `/api/admin/quiz-filters?topic=${selectedTopic}` : null,
    fetcher
  );

  const { data, error, isLoading } = useSWR(
    `/api/admin/results?${searchParams.toString()}`,
    fetcher,
    { keepPreviousData: true }
  );

  const handleUrlUpdate = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    handleUrlUpdate("quizTopic", topic);
    handleUrlUpdate("quizTitle", null); // Reset title when topic changes
  };

  const handleDateChange = (dates: {
    from: Date | undefined;
    to: Date | undefined;
  }) => {
    const params = new URLSearchParams(searchParams);
    if (dates.from) params.set("startDate", dates.from.toISOString());
    else params.delete("startDate");
    if (dates.to) params.set("endDate", dates.to.toISOString());
    else params.delete("endDate");
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (searchParams.get("quizTopic")) {
      setSelectedTopic(searchParams.get("quizTopic")!);
    }
  }, [searchParams]);

  if (error) return <div>Failed to load</div>;

  return (
    <div className="px-4">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <Input
          placeholder="Search by name or quiz title..."
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(e) => handleUrlUpdate("search", e.target.value)}
          className="max-w-sm"
        />
        <Select
          onValueChange={handleTopicChange}
          value={selectedTopic}
          defaultValue="all"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            {topicsData?.topics?.map((topic: string) => (
              <SelectItem key={topic} value={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => handleUrlUpdate("quizTitle", value)}
          value={searchParams.get("quizTitle") || "all"}
          disabled={!selectedTopic || selectedTopic === "all"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by title" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Titles</SelectItem>
            {titlesData?.titles?.map((title: string) => (
              <SelectItem key={title} value={title}>
                {title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DateRangePicker
          onUpdate={(range) =>
            handleDateChange({ from: range?.from, to: range?.to })
          }
        />
      </div>
      <DataTable
        columns={columns}
        data={data?.data ?? []}
        total={data?.total ?? 0}
      />
    </div>
  );
}
