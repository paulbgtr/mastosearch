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
import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";

const Category = ({ title }: { title: string }) => {
  return <span className="px-3 py-1 bg-gray-200 rounded-xl">{title}</span>;
};

const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <Category key={category} title={category} />
      ))}
    </div>
  );
};

const RegistrationStatus = ({
  openRegistrations,
}: {
  openRegistrations: boolean;
}) => {
  return (
    <p>
      {openRegistrations ? (
        <>
          <LockOpen1Icon className="inline-block w-4 h-4" /> Open registrations
        </>
      ) : (
        <>
          <LockClosedIcon className="inline-block w-4 h-4" /> Closed
          registrations
        </>
      )}
    </p>
  );
};

const trimDescription = (description: string) => {
  if (!description) return "No description";

  if (description.length > 100) {
    return description.substring(0, 100) + "...";
  }
  return description;
};

export const MastodonInstance = ({
  name,
  languages,
  activeUsers,
  openRegistrations,
  categories,
  shortDescription,
}: MastodonInstanceT) => {
  const trimmedDescription = trimDescription(shortDescription);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">
          {trimmedDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1 ">
        <p>Active users: {activeUsers}</p>
        <RegistrationStatus openRegistrations={openRegistrations} />
        {languages && <p>Languages: {languages.join(", ")}</p>}
        <Categories categories={categories} />
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
