import Feed from "@/components/Feed/feed";
import { SignIn } from "@/components/sign-in";
import { auth } from "@/config/auth";

export default async function Home() {
  const session = await auth()
  console.log(session)

  return (
    <main className="w-screen h-screen" >
      jfsdjklf
      {/* {!session ? <SignIn /> : <Feed />} */}
    </main>
  );
}
