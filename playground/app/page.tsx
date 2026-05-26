import { redirect } from "next/navigation";

// The playground feature lives at /playground. Send the root there.
export default function Home() {
  redirect("/playground");
}
