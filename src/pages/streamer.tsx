
import type { LoaderFunctionArgs } from "react-router";
import { getEmotes, getUserById } from '@/shared/api/twitchApi/axios';
import { Route } from "./+types/streamer";
import StreamerInfo from "@/components/streamer-info";
import StreamerVideos from "@/components/streamer-video";
import { Suspense } from "react";
import Loading from "@/components/loading";

// const StreamerInfo = lazy(() => import('@/components/streamer-info'))
// const StreamerVideos = lazy(() => import('@/components/streamer-video'))

// export const loader =
//   (queryClient: QueryClient) =>
//   async ({ params }: LoaderFunctionArgs) => {
//     if (!params.id) {
//       console.log(params.id)
//       throw new Error('No contact ID provided')
//     }
//     const id = params.id
// queryClient.ensureQueryData(useUserById(id))
// queryClient.ensureQueryData(useUserEmotes(id))
//     return id
//   }
export async function clientLoader({ params }: LoaderFunctionArgs) {
  const user = await getUserById(params.id)
  const emote = await getEmotes(params.id)
  return { user, emote }
}

// export const Streamer = ({ loaderData }: Route.ComponentProps) => {
export default function Streamer ({ loaderData }: Route.ComponentProps)  {
  // const data = useLoaderData()
  const { user, emote } = loaderData

  return (
    <Suspense fallback={<Loading />}>
    <article className="overflow-hidden">
      <StreamerInfo emotes={emote} user={user} />
      <StreamerVideos />
    </article>
      </Suspense>
  )
}
