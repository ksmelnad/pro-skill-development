import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "./ui/card";

export default function CarouselComp() {
  const items = [
    {
      title: "Register",
      description: "Register to get started",
    },
    {
      title: "Complete Profile",
      description: "Complete your profile to get started",
    },
    {
      title: "Attempt Quiz",
      description: "Attempt a quiz to get started",
    },
    {
      title: "Get Certificate",
      description: "Get a certificate to get started",
    },
  ];

  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
