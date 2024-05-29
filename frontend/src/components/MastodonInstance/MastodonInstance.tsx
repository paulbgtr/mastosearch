import { buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MastodonInstance as MastodonInstanceT } from "@/types/MastodonInstance";

export const MastodonInstance = ({
  name,
  activeUsers,
  openRegistrations,
  categories,
  shortDescription,
}: MastodonInstanceT) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Active users: {activeUsers}</p>
        <p>Open registrations: {openRegistrations ? "Yes" : "No"}</p>
        <p>Categories: {categories.join(", ")}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a
          href={`https://${name}`}
          target="_blank"
          className={buttonVariants({ variant: "default" })}
        >
          Visit
        </a>
      </CardFooter>
    </Card>
  );
};
